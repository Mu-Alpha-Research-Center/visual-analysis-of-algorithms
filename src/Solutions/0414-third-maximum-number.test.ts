// https://leetcode.com/problems/third-maximum-number

import { Tests } from '../TestHelpers'

function thirdMax1(nums: number[]): number {
  let numsUnique: number[] = Array.from(new Set(nums))
  let numsSorted: number[] = numsUnique.sort((a, b) => b - a)
  // The time complexity is order of n log n.
  // * Sorting the numbers.
  // The space complexity is order of n.
  // * Set of unique numbers.
  return numsSorted.length < 3 ? numsSorted[0] : numsSorted[2]
}

function thirdMax2(nums: number[]): number {
  let numsUnique: number[] = Array.from(new Set(nums))
  if (numsUnique.length < 3) {
    return Math.max(...numsUnique)
  }
  let max1: number = -Number.MAX_VALUE
  let max2: number = -Number.MAX_VALUE
  let max3: number = -Number.MAX_VALUE
  for (let num of numsUnique) {
    if (num > max1) {
      max3 = max2
      max2 = max1
      max1 = num
    }
    else if (num > max2) {
      max3 = max2
      max2 = num
    } else if (num > max3) {
      max3 = num
    }
  }
  // The time complexity is order of n.
  // The space complexity is order of n.
  // * Set of unique numbers.
  return max3
}

let tests = new Tests(
  [[1], 1],
  [[1, 2], 2],
  [[1, 2, 3], 1],
  [[2, 2, 3, 1], 1],
  [[1, 1, 2], 2],
  [[1, 2, -2147483648], -2147483648]
)

tests.run(
  thirdMax1,
  thirdMax2
)
