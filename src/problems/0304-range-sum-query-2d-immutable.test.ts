// https://leetcode.com/problems/range-sum-query-2d-immutable

import Tests from '../TestHelpers'

class NumMatrix {
    dp: number[][]

    constructor(matrix: number[][]) {
        if (matrix.length === 0 || matrix[0].length === 0) {
            return
        }
        let n = matrix.length
        let m = matrix[0].length
        let dp = this.emptyMatrix(n, m + 1)
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                dp[r][c + 1] = dp[r][c] + matrix[r][c]
            }
        }
        this.dp = dp
    }

    emptyMatrix(n, m) {
        return Array(n)
            .fill(null)
            .map(() => Array(m).fill(0))
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0
        for (let row = row1; row <= row2; row++) {
            sum += this.dp[row][col2 + 1] - this.dp[row][col1]
        }
        return sum
    }
}

let testMatrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
]
let tests = new Tests([
    ['NumMatrix', 'sumRegion'],
    [[testMatrix], [2, 1, 4, 3]],
    [null, 8],
])

tests.runClass(NumMatrix)
