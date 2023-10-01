.PHONY: phony

PANDOC_FLAGS =                       \
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

FIGURES = $(shell find . -name '*.png')

clean: phony
	rm -rf book/output/*

book: phony clean
	pandoc $(PANDOC_FLAGS) -o book/output/index.pdf book/index.md

watch: phony
	fswatch -o -r book/*.md | xargs -n1 -I{} make book
