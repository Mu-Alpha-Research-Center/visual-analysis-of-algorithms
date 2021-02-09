// https://leetcode.com/problems/missing-number

import Tests from '../TestHelpers'

function missingNumber1(nums: number[]): number {
  nums.sort((a, b) => a - b)
  if (nums[nums.length - 1] !== nums.length) {
    // Missing number is last one
    return nums.length
  } else if (nums[0] !== 0) {
    // Missing number is 0
    return 0
  }
  // Missing number is between (0, n)
  for (let i = 1; i < nums.length; i++) {
    let expected = nums[i - 1] + 1
    if (nums[i] !== expected) {
      return expected
    }
  }
  // Array is not missing any numbers
  return -1
}

function missingNumber2(nums: number[]): number {
  let numSet = new Set<number>(nums)
  // Iterating from 0 to n, missing number is not in set
  for (let num = 0; num < nums.length + 1; num++) {
    if (!numSet.has(num)) return num
  }
  return 0
}

function missingNumber3(nums: number[]): number {
  // Black-magic XOR
  let missing = nums.length
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i]
  }
  return missing
}

let tests = new Tests(
  [[3, 0, 1], 2],
  [[0, 1], 2],
  [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8],
  [[0], 1],
  [[1], 0],
  [[1, 2], 0]
)

tests.run(
  missingNumber1,
  missingNumber2,
  missingNumber3,
)
