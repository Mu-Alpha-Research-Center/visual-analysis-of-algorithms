<p align="center">
  <img src="./book/images/typescript-algorithms-mock.png" alt="typescript algorithms logo" width="40%"/>
</p>

## About

In-progress book about algorithms and data structures in TypeScript.

-   [typescript-algorithms.pdf](book/output/typescript-algorithms.pdf)

## Contributing

### Run Problem Tests

-   Install [Node Version Manager](https://github.com/nvm-sh/nvm)
-   `yarn setup`
-   `yarn test --all`

### Compile Book to PDF

-   Install [Pandoc](https://pandoc.org) ([Homebrew](https://formulae.brew.sh/formula/pandoc))
-   Install BasicTeX ([Homebrew](https://formulae.brew.sh/cask/basictex))
-   Install [fswatch](https://github.com/emcrisostomo/fswatch) ([Homebrew](https://formulae.brew.sh/formula/fswatch))
-   `make book`
-   `open book/output/typescript-algorithms.pdf`

### Edit Excalidraw Diagrams

-   Install [Excalidraw VSCode Extension](https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor)

### Commands

| Command                 | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| `yarn setup`            | Setup local development environment                   |
| `yarn test`             | Run problem tests                                     |
| `yarn generate:problem` | Generate new LeetCode or Project Euler problem        |
| `make book`             | Compile book to PDF                                   |
| `make watch`            | Recompile book automatically when source files change |
