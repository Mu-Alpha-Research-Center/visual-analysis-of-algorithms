.PHONY: phony

SRC_DIR = book
OUT_DIR = $(SRC_DIR)/output
PDF_PATH = $(OUT_DIR)/typescript-algorithms.pdf
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
	rm -rf $(OUT_DIR)/*

install: phony
	brew bundle --no-lock
	yarn

book: phony clean
	pandoc $(PANDOC_FLAGS) -o $(PDF_PATH) $(MARKDOWN_FILES)
	open $(PDF_PATH)

book-watch: phony book
	fswatch -o -r $(SRC_DIR)/*.md | xargs -n1 -I{} make book
