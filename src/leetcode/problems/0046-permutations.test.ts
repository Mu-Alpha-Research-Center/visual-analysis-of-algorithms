// https://leetcode.com/problems/permutations

import Tests from '../../TestHelpers'

function permute(nums: number[]): number[][] {
    let result = []

    if (nums.length === 1) {
        return [nums]
    }

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        const rest = [...nums]

        rest.splice(i, 1)

        for (const perm of permute(rest)) {
            result.push([n, ...perm])
        }
    }

    return result
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
