// https://leetcode.com/problems/search-insert-position

import { runTests } from './TestHelpers'

function searchInsert(nums: number[], target: number): number {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    let n = nums[j]
    if (n < target) {
      i = j + 1
    } else if (n === target) {
      return j
    }
  }
  return i
}

runTests(searchInsert, [
  [[1, 3, 5, 6], 5, 2],
  [[1, 3, 5, 6], 2, 1],
  [[1, 3, 5, 6], 7, 4],
  [[1, 3, 5, 6], 0, 0],
])
