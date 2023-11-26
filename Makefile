.PHONY: phony

SRC_DIR = book
OUT_DIR = $(SRC_DIR)/output
PDF_PATH = $(OUT_DIR)/book.pdf
MARKDOWN_FILES = $(shell find book/src -name '*.md' | sort)
PANDOC_FLAGS = \
	--pdf-engine=pdflatex \
	--from=markdown \
  	--resource-path=book \
	--file-scope \
	--table-of-contents \
	--number-sections \
	--indented-code-classes=python \
	--highlight-style=monochrome \
	-V mainfont="Palatino" \
	-V documentclass=report \
	-V papersize=A5 \
	-V geometry:margin=0.75in

clean: phony
	rm -rf $(OUT_DIR)/*

brew.install: phony
	brew bundle --no-lock

python.install: phony python.env
	pyenv install -s
	pip install -U pip black notebook pipreqsnb

python.reqs: phony python.env
	pipreqsnb --force

python.env: phony
	python -m venv env
	. env/bin/activate

jupyter.notebook: phony python.env
	jupyter notebook

book.compile: phony clean
	pandoc $(PANDOC_FLAGS) -o $(PDF_PATH) $(MARKDOWN_FILES)
	open $(PDF_PATH)
