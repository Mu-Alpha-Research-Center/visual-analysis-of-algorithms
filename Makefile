.PHONY: phony

PANDOC_FLAGS =                       \
  --file-scope                       \
  --table-of-contents                \
  --pdf-engine=pdflatex              \
  --from=markdown                    \
  --number-sections                  \
  --indented-code-classes=javascript \
  --highlight-style=monochrome       \
  -V mainfont="Palatino"             \
  -V documentclass=report            \
  -V papersize=A5                    \
  -V geometry:margin=1in

MARKDOWN_FILES = $(shell find book -name '*.md' | sort)
FIGURES = $(shell find . -name '*.png')

clean: phony
	rm -rf book/output/*

book: phony clean
	pandoc $(PANDOC_FLAGS) -o book/output/index.pdf $(MARKDOWN_FILES)

watch: phony
	fswatch -o -r book/*.md | xargs -n1 -I{} make book
