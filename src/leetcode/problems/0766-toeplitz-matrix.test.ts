// https://leetcode.com/problems/toeplitz-matrix

import Tests from '../../TestHelpers'

function* diagonals(matrix: number[][]): IterableIterator<number[]> {
    let numCols = matrix[0].length
    let numRows = matrix.length
    for (let col = 0; col < numCols; col++) {
        let r = 0
        let c = col
        let d = []
        while (r < numRows && c < numCols) {
            d.push(matrix[r++][c++])
        }
        yield d
    }
    for (let row = 1; row < numRows; row++) {
        let r = row
        let c = 0
        let d = []
        while (r < numRows && c < numCols) {
            d.push(matrix[r++][c++])
        }
        yield d
    }
}

function same(numbers: number[]): boolean {
    let num = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        let otherNum = numbers[i]
        if (otherNum !== num) {
            return false
        }
    }
    return true
}

function isToeplitzMatrix(matrix: number[][]): boolean {
    for (let d of diagonals(matrix)) {
        if (!same(d)) {
            return false
        }
    }
    return true
}

let tests = new Tests(
    [
        [
            [1, 2, 3, 4],
            [5, 1, 2, 3],
            [9, 5, 1, 2],
        ],
        true,
    ],
    [
        [
            [1, 2],
            [2, 2],
        ],
        false,
    ]
)

tests.run(isToeplitzMatrix)
