// https://leetcode.com/problems/valid-sudoku

import Tests from '../TestHelpers'

function isValidSudoku(board: string[][]): boolean {
    let n = board.length
    let m = board[0].length
    // Check rows
    for (let r = 0; r < n; r++) {
        let nums = new Set()
        for (let c = 0; c < m; c++) {
            let v = board[r][c]
            if (v === '.') continue
            if (nums.has(v)) return false
            nums.add(v)
        }
    }
    // Check columns
    for (let c = 0; c < m; c++) {
        let nums = new Set()
        for (let r = 0; r < n; r++) {
            let v = board[r][c]
            if (v === '.') continue
            if (nums.has(v)) return false
            nums.add(v)
        }
    }
    // Check 3 x 3 sub-boxes
    let boxes = [
        [0, 0],
        [0, 3],
        [0, 6],
        [3, 0],
        [3, 3],
        [3, 6],
        [6, 0],
        [6, 3],
        [6, 6],
    ]
    for (let [row, col] of boxes) {
        let nums = new Set()
        for (let r = row; r < row + 3; r++) {
            for (let c = col; c < col + 3; c++) {
                let v = board[r][c]
                if (v === '.') continue
                if (nums.has(v)) return false
                nums.add(v)
            }
        }
    }
    return true
}

let tests = new Tests(
    [
        [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ],
        true,
    ],
    [
        [
            ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ],
        false,
    ]
)

tests.run(isValidSudoku)
