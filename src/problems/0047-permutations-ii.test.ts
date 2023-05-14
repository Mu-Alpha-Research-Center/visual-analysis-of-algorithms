// https://leetcode.com/problems/permutations-ii

import Tests from '../TestHelpers'

function permuteUnique(nums: number[]): number[][] {
    let result = []
    let s = new Set()

    if (nums.length === 1) {
        return [nums]
    }

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        const rest = [...nums]

        rest.splice(i, 1)

        for (const perm of permuteUnique(rest)) {
            const solution = [n, ...perm]
            const solutionId = solution.toString()

            if (!s.has(solutionId)) {
                s.add(solutionId)
                result.push(solution)
            }
        }
    }

    return result
}

let tests = new Tests(
    [
        [1, 1, 2],
        [
            [1, 1, 2],
            [1, 2, 1],
            [2, 1, 1],
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

tests.run(permuteUnique)
