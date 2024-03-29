.PHONY: phony

SRC_DIR = book
OUT_DIR = $(SRC_DIR)/output
PDF_PATH = $(OUT_DIR)/visual-analysis-of-algorithms.pdf
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
PYTEST_FLAGS=-s --disable-warnings

default: help

help: phony # Show help for Makefile commands
	@ grep -E '^[a-zA-Z0-9 -.]+:.*#'  Makefile | sort | while read -r l; do printf "\033[1;32m$$(echo $$l | cut -f 1 -d':')\033[00m:$$(echo $$l | cut -f 2- -d'#')\n"; done

clean: phony # Clean output directory
	@ rm -rf $(OUT_DIR)/*

install: phony brew.install python.install # Install dependencies

brew.install: phony # Install Homebrew dependencies
	@ brew bundle --no-lock

python.install: phony python.env # Install Python dependencies
	@ pyenv install -s
	@ pip install -q -U pip pipreqs black pytest watchdog autoflake pre-commit isort
	@ pip install -q -r requirements.txt

python.env: phony # Activate Python virtual environment
	@ python -m venv env
	@ . env/bin/activate

python.reqs: phony python.env # Update Python package requirements
	@ pipreqs --force

python.fmt: phony python.env # Format Python code
	@ black src
	@ autoflake -i --remove-all-unused-imports src/**/*.py
	@ isort src

book.compile: phony clean # Compile Markdown book to PDF
	@ pandoc $(PANDOC_FLAGS) -o $(PDF_PATH) $(MARKDOWN_FILES)
	@ open $(PDF_PATH)

test: phony python.env # Test problems
	@ pytest $(PYTEST_FLAGS)

test.watch: phony python.env # Watch and test problems
	@ watchmedo shell-command --patterns="*.py" --recursive --command='pytest $(PYTEST_FLAGS)' .
