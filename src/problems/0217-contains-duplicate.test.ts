// https://leetcode.com/problems/contains-duplicate

import Tests from '../TestHelpers'

function containsDuplicate(nums: number[]): boolean {
  let uniqueNums = new Set(nums)
  return uniqueNums.size !== nums.length
}

let tests = new Tests(
  [[1, 2, 3, 1], true],
  [[1, 2, 3, 4], false],
  [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true]
)

tests.run(
  containsDuplicate
)
