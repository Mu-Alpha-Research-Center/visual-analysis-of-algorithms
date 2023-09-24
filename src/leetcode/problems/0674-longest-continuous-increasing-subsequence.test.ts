// https://leetcode.com/problems/longest-continuous-increasing-subsequence

import Tests from '../../TestHelpers'

function findLengthOfLCIS(nums: number[]): number {
    let max = 0
    let i = 0
    while (i < nums.length) {
        let num = 1
        while (nums[i] < nums[i + 1]) {
            num++
            i++
        }
        if (num > max) {
            max = num
        }
        i++
    }
    return max
}

let tests = new Tests([[1, 3, 5, 4, 7], 3], [[2, 2, 2, 2, 2], 1])

tests.run(findLengthOfLCIS)
