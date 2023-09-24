// https://leetcode.com/problems/spiral-matrix

import Tests from '../../TestHelpers'

function* traverseSpiral(matrix: number[][]): IterableIterator<number> {
    // Initialize column and row pointers
    let cmin = 0
    let cmax = matrix[0].length - 1
    let rmin = 0
    let rmax = matrix.length - 1
    // Loop until pointers cross each other
    while (cmin <= cmax && rmin <= rmax) {
        // Iterate top row
        for (let c = cmin; c <= cmax; c++) yield matrix[rmin][c]
        // Iterate right column
        for (let r = rmin + 1; r <= rmax; r++) yield matrix[r][cmax]
        // Check if bottom row and left column exist
        if (cmin < cmax && rmin < rmax) {
            // Iterate bottom row
            for (let c = cmax - 1; c > cmin; c--) yield matrix[rmax][c]
            // Iterate left column
            for (let r = rmax; r > rmin; r--) yield matrix[r][cmin]
        }
        // Converge pointers towards each other
        rmin++
        rmax--
        cmin++
        cmax--
    }
}

function spiralOrder(matrix: number[][]): number[] {
    return [...traverseSpiral(matrix)]
}

let tests = new Tests(
    [
        [
            // 0  1  2  3  4  5  6
            [1, 1, 1, 1, 1, 1, 1], // 0
            [4, 5, 5, 5, 5, 5, 2], // 1
            [4, 8, 9, 9, 9, 6, 2], // 2
            [4, 8, 7, 7, 7, 6, 2], // 3
            [4, 3, 3, 3, 3, 3, 2], // 4
        ],
        [
            1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5,
            5, 5, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9,
        ],
    ],
    [[[1]], [1]],
    [
        [
            [1, 2],
            [4, 3],
        ],
        [1, 2, 3, 4],
    ],
    [
        [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
        ],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    [
        [
            [1, 2, 3, 4],
            [10, 11, 12, 5],
            [9, 8, 7, 6],
        ],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ],
    [
        [
            [1, 2],
            [6, 3],
            [5, 4],
        ],
        [1, 2, 3, 4, 5, 6],
    ],
    [[[2, 3]], [2, 3]],
    [
        [[1], [2], [3]],
        [1, 2, 3],
    ],
    [
        [
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7],
        ],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    ]
)

tests.run(spiralOrder)
