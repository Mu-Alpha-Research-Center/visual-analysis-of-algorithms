// https://leetcode.com/problems/find-the-duplicate-number

import Tests from '../TestHelpers'

function findDuplicate(nums: number[]): number {
    let seen = new Set()
    for (let n of nums) {
        if (seen.has(n)) return n
        seen.add(n)
    }
    return 0
}

let tests = new Tests(
    [[1, 3, 4, 2, 2], 2],
    [[3, 1, 3, 4, 2], 3],
    [[1, 1], 1],
    [[1, 1, 2], 1]
)

tests.run(findDuplicate)
