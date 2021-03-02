// https://leetcode.com/problems/rotate-image

import Tests from '../TestHelpers'

function transpose(matrix: number[][]): void {
  // Imagine splitting the matrix along the main diagonal, traversing the
  // top right portion. As you traverse, you can find the opposite point by
  // flipping the indicies i and j.
  let n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let t = matrix[j][i]
      matrix[j][i] = matrix[i][j]
      matrix[i][j] = t
    }
  }
}

function reflect(matrix: number[][]): void {
  // Imagine splitting the matrix right down the middle, traversing the
  // right hand side of the matrix. As you traverse each column, you can
  // find the opposite point by subtracting the column from the row length - 1.
  let n = matrix.length
  for (let i = 0; i < n; i++) {
    let mid = n / 2
    for (let j = 0; j < mid; j++) {
      let t = matrix[i][j]
      let k = n - j - 1
      matrix[i][j] = matrix[i][k]
      matrix[i][k] = t
    }
  }
}

function rotate(matrix: number[][]): void {
  transpose(matrix)
  reflect(matrix)
}

let tests = new Tests(
  [
    [[1,2,3],[4,5,6],[7,8,9]],
    [[7,4,1],[8,5,2],[9,6,3]]
  ]
)

tests.runFunc(rotate, { inPlace: true })
