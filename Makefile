.PHONY: phony

MARKDOWN_FILES = $(shell find book -name '*.md' | sort)

PANDOC_FLAGS =                       \
  --pdf-engine=pdflatex              \
  --from=markdown                    \
  --resource-path=book               \
  --file-scope                       \
  --table-of-contents                \
  --number-sections                  \
  --indented-code-classes=javascript \
  --highlight-style=monochrome       \
  -V mainfont="Palatino"             \
  -V documentclass=report            \
  -V papersize=A5                    \
  -V geometry:margin=1in

clean: phony
	rm -rf output/*

book: phony clean
	pandoc $(PANDOC_FLAGS) -o output/book.pdf $(MARKDOWN_FILES)

watch: phony
	fswatch -o -r book/*.md | xargs -n1 -I{} make book
