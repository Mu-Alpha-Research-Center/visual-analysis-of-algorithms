// https://leetcode.com/problems/squares-of-a-sorted-array

import { runTests } from './TestHelpers'

function sortedSquares(A: number[]): number[] {
  return A.map(n => n * n).sort((a, b) => a - b)
}

runTests(sortedSquares, [
  [[-4, -1, 0, 3, 10], [0, 1, 9, 16, 100]],
  [[-7, -3, 2, 3, 11], [4, 9, 9, 49, 121]],
])
