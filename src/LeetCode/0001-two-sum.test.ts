// https://leetcode.com/problems/two-sum

import { runTests } from '../TestHelpers'

function twoSum3(nums: number[], target: number): number[] {
  // S = O(n)
  // T = O(n)
  let map: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (complement in map) {
      return [map[complement], i]
    }
    map[nums[i]] = i
  }
  return []
}

function twoSum2(nums: number[], target: number): number[] {
  // S = O(n)
  // T = O(n + n) => O(n)
  let map: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i
  }
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    let j = map[complement]
    if (j && j !== i) {
      return [i, j]
    }
  }
  return []
}

function twoSum1(nums: number[], target: number): number[] {
  // S = O(1)
  // T = O(n^2)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) return [i, j]
    }
  }
  return []
}

let tests = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[2, 7, 11, 15], 8, []],
  [[3, 2, 4], 6, [1, 2]],
]

runTests(twoSum1, tests)
runTests(twoSum2, tests)
runTests(twoSum3, tests)
