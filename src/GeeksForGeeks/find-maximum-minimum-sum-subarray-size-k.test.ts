// https://www.geeksforgeeks.org/find-maximum-minimum-sum-subarray-size-k

import { runTests } from '../TestHelpers'

function maxSum(arr: number[], k: number): number {
  let max:number = Number.MIN_VALUE
  let sum:number = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (i >= k - 1) {
      max = Math.max(max, sum)
      sum -= arr[i - (k - 1)]
    }
  }

  return max
}

runTests(maxSum, [
  [[100, 200, 300, 400], 2, 700],
  [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4, 39]
])
