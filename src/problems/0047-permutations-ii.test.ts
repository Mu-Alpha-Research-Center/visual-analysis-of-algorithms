// https://leetcode.com/problems/permutations-ii

import Tests from '../TestHelpers'

function permuteUnique(nums: number[]): number[][] {
    return []
}

let tests = new Tests([
    [1, 1, 2],
    [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
    ],
])

tests.run(permuteUnique)
