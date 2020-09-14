// https://leetcode.com/problems/maximum-subarray

import { runTests } from './TestHelpers'

function maxSubArray(nums: number[]): number {
  let max = NaN, i, j, n
  i = j = n = 0
  while(i < nums.length) {
    n += nums[j]
    if (isNaN(max) || n > max) {
      max = n
    }
    if (j === nums.length) {
      n = 0
      j = i
      i++
    }
    j++
  }
  return max
}

runTests(maxSubArray, [
  [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
  [[1], 1],
  [[0], 0],
  [[-1], -1],
  [[-2147483647], -2147483647],
])
