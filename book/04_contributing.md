# Contributing

## Getting Started

### Run Problem Tests

-   Install [Node Version Manager](https://github.com/nvm-sh/nvm)
-   `yarn setup`
-   `yarn test --all`

### Compile Book

-   Install [Pandoc](https://pandoc.org) ([Homebrew](https://formulae.brew.sh/formula/pandoc))
-   Install BasicTeX ([Homebrew](https://formulae.brew.sh/cask/basictex))
-   Install [fswatch](https://github.com/emcrisostomo/fswatch) ([Homebrew](https://formulae.brew.sh/formula/fswatch))
-   `make book`
-   `open book/output/index.pdf`

## Commands

| Command                  | Description                                           |
| ------------------------ | ----------------------------------------------------- |
| `yarn setup`             | Setup local development environment                   |
| `yarn test`              | Run tests                                             |
| `yarn gen:leetcode`      | Generate new LeetCode problem                         |
| `yarn gen:project-euler` | Generate new Project Euler problem                    |
| `make book`              | Compile book to various formats                       |
| `make watch`             | Recompile book automatically when source files change |
