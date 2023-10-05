.PHONY: phony

MARKDOWN_FILES = $(shell find book -name '*.md' | sort)

PANDOC_FLAGS =                       \
  --pdf-engine=pdflatex              \
  --from=markdown                    \
  --resource-path=book               \
  --file-scope                       \
  --table-of-contents                \
  --number-sections                  \
  --indented-code-classes=typescript \
  --highlight-style=monochrome       \
  -V mainfont="Palatino"             \
  -V documentclass=report            \
  -V papersize=A5                    \
  -V geometry:margin=0.75in

clean: phony
	rm -rf book/output/*

install: phony
	brew bundle --no-lock
	yarn

book: phony clean
	pandoc $(PANDOC_FLAGS) -o book/output/typescript-algorithms.pdf $(MARKDOWN_FILES)
	open book/output/typescript-algorithms.pdf

book-watch: phony book
	fswatch -o -r book/*.md | xargs -n1 -I{} make book
