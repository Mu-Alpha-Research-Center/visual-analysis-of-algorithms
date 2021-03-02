// https://leetcode.com/problems/set-matrix-zeroes

import Tests from '../TestHelpers'

function setZeroes(matrix: number[][]): void {
  const numRows = matrix.length
  const numCols = matrix[0].length
  const rowsWithZero = new Set()
  const colsWithZero = new Set()
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      if (matrix[r][c] === 0) {
        rowsWithZero.add(r)
        colsWithZero.add(c)
      }
    }
  }
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      if (rowsWithZero.has(r) || colsWithZero.has(c)) {
        matrix[r][c] = 0
      }
    }
  }
}

let tests = new Tests(
  [
    [[1,1,1],[1,0,1],[1,1,1]],
    [[1,0,1],[0,0,0],[1,0,1]]
  ],
  [
    [[0,1,2,0],[3,4,5,2],[1,3,1,5]],
    [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
  ]
)

tests.runFunc(setZeroes, { inPlace: true })
