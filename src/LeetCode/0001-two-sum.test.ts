// https://leetcode.com/problems/two-sum

import { runTests } from '../TestHelpers'

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      let m = nums[j]
      if (n + m === target) {
        return [i, j]
      }
    }
  }
  return []
}

runTests(twoSum, [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[2, 7, 11, 15], 8, []],
  [[3, 2, 4], 6, [1, 2]],
])
