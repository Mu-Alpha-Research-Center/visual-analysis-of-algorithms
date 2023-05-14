// https://leetcode.com/problems/running-sum-of-1d-array

import { runTests } from '../TestHelpers'

function runningSum(nums: number[]): number[] {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i]
        for (let j = 0; j < i; j++) {
            sum += nums[j]
        }
        result.push(sum)
    }
    return result
}

runTests(runningSum, [
    [
        [1, 2, 3, 4],
        [1, 3, 6, 10],
    ],
    [
        [1, 1, 1, 1, 1],
        [1, 2, 3, 4, 5],
    ],
])
