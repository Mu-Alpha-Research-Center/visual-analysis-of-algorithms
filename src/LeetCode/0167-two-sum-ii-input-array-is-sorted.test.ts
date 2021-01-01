// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

import { Tests } from '../TestHelpers'

function twoSum1(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]
      }
    }
  }
  return []
}

function twoSum2(numbers: number[], target: number): number[] {
  let map: Record<number, number> = {}
  for (let i = 0; i < numbers.length; i++) {
    map[numbers[i]] = i
  }
  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i]
    if (complement in map) {
      let j = map[complement]
      if (i !== j) {
        return [i + 1, j + 1]
      }
    }
  }
  return []
}

function twoSum3(numbers: number[], target: number): number[] {
  let map: Record<number, number> = {}
  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i]
    if (complement in map) {
      return [map[complement] + 1, i + 1]
    }
    map[numbers[i]] = i
  }
  return []
}

function twoSum4(numbers: number[], target: number): number[] {
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    let sum = numbers[i] + numbers[j]
    if (sum === target) {
      return [i + 1, j + 1]
    } else if (sum < target) {
      i++
    } else {
      j--
    }
  }
  return []
}

let tests = new Tests(
  [[2, 7, 11, 15], 9, [1, 2]],
  [[2, 3, 4], 6, [1, 3]],
  [[-1, 0], -1, [1, 2]],
)

tests
  .run(twoSum1)
  .run(twoSum2)
  .run(twoSum3)
  .run(twoSum4)
