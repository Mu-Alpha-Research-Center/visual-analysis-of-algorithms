// https://leetcode.com/problems/game-of-life

import Tests from '../TestHelpers'

type Board = number[][]

function emptyBoard(rows: number, cols: number): Board {
  return Array(rows).fill(null).map(() => Array(cols).fill(0))
}

function* traverse(board: Board): IterableIterator<[row: number, col: number]> {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      yield [r, c]
    }
  }
}

function cloneBoard(board: Board): Board {
  let clone = emptyBoard(board.length, board[0].length)
  for (let [r, c] of traverse(board)) {
    clone[r][c] = board[r][c]
  }
  return clone
}

function gameOfLife(board: Board): void {
  let [rows, cols] = [board.length, board[0].length]
  let copyBoard = cloneBoard(board)
  for (let [row, col] of traverse(board)) {
    // Count live neighbors.
    let neighbors = [0, 1, -1]
    let liveNeighbors = 0
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!(neighbors[i] === 0 && neighbors[j] === 0)) {
          let r = (row + neighbors[i])
          let c = (col + neighbors[j])
          if ((r < rows && r >= 0) && (c < cols && c >= 0) && (copyBoard[r][c] === 1)) {
            liveNeighbors += 1;
          }
        }
      }
    }
    // 1. Any live cell with fewer than 2 live neighbors dies.
    // 3. Any live cell with more than 3 live neighbors dies.
    if ((copyBoard[row][col] === 1) && (liveNeighbors < 2 || liveNeighbors > 3)) {
      board[row][col] = 0;
    } else if (liveNeighbors === 2 || liveNeighbors === 3) {
      // 2. Any live cell with 2 or 3 live neighbors lives on.
    }
    // 4. Any dead cell with 3 live neighbors becomes a live cell.
    if (copyBoard[row][col] === 0 && liveNeighbors === 3
    ) {
      board[row][col] = 1;
    }
  }
}

let tests = new Tests(
  [
    [[1,1],[1,0]],
    [[1,1],[1,1]]
  ],
  [
    [[0,1,0],[0,0,1],[1,1,1],[0,0,0]],
    [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
  ]
)

tests.runFunc(gameOfLife, { inPlace: true })
