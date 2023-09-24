// https://leetcode.com/problems/maximum-average-subarray-i

import Tests from '../../TestHelpers'

const sum = (nums: number[]): number =>
    nums.reduce((result, num) => result + num, 0)
const avg = (nums: number[]): number => sum(nums) / nums.length

function findMaxAverage1(nums: number[], k: number): number {
    // Sliding window
    let maxAverage = -Number.MAX_VALUE
    let beg = 0
    let end = k - 1
    while (end < nums.length) {
        let currAverage = avg(nums.slice(beg, end + 1))
        maxAverage = Math.max(currAverage, maxAverage)
        beg++
        end++
    }
    return maxAverage
}

function findMaxAverage2(nums: number[], k: number): number {
    // Rolling window
    let maxSum = -Number.MAX_VALUE
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            sum += nums[i]
            if (i === k - 1) {
                maxSum = Math.max(maxSum, sum)
            }
        } else {
            sum += nums[i]
            sum -= nums[i - k]
            maxSum = Math.max(maxSum, sum)
        }
    }
    return maxSum / k
}

let tests = new Tests(
    // Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
    [[1, 12, -5, -6, 50, 3], 4, 12.75]
)

tests.run(findMaxAverage1, findMaxAverage2)
