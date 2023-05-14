// https://leetcode.com/problems/permutations

import Tests from '../TestHelpers'

function permute(nums: number[]): number[][] {
    return []
}

let tests = new Tests(
    [[1], [[1]]],
    [
        [0, 1],
        [
            [0, 1],
            [1, 0],
        ],
    ],
    [
        [1, 2, 3],
        [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ],
    ]
)

tests.run(permute)
