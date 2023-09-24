// https://leetcode.com/problems/pascals-triangle

import Tests from '../../TestHelpers'

function generate(numRows: number): number[][] {
    // The iterative approach to constructing Pascal's triangle can be classified
    // as dynamic programming because we construct each row based on the previous
    // row.
    let rows: number[][] = []
    for (let i = 0; i < numRows; i++) {
        let row: number[] = [1]
        if (i > 0) {
            let prevRow: number[] = rows[i - 1]
            for (let j = 0; j + 1 < prevRow.length; j++) {
                row.push(prevRow[j] + prevRow[j + 1])
            }
            row.push(1)
        }
        rows.push(row)
    }
    return rows
}

let tests = new Tests(
    [0, []],
    [1, [[1]]],
    [2, [[1], [1, 1]]],
    [3, [[1], [1, 1], [1, 2, 1]]],
    [4, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]],
    [5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]]
)

tests.run(generate)
