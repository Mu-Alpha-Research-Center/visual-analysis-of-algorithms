// https://leetcode.com/problems/merge-sorted-array

import Tests from '../TestHelpers'

function merge1(nums1: number[], m: number, nums2: number[], n: number): number[] {
  // Fill in the values from nums2 into nums1 and sort
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i]
  }
  nums1.sort((a, b) => a - b)
  return nums1
}

function merge2(nums1: number[], m: number, nums2: number[], n: number): number[] {
  // Create a copy of nums1
  // Modify nums1 in place by keeping track of pointers into num1copy and nums2
  let nums1_copy = nums1.slice(0, m)
  let p1 = 0
  let p2 = 0

  for (let p = 0; p < n + m; p++) {
    if (
      // p2 >= size of nums2
      p2 >= n ||
      // p1 < size of nums1 && num1 <= num2
      (p1 < m && nums1_copy[p1] <= nums2[p2])) {
      nums1[p] = nums1_copy[p1]
      p1++
    } else {
      // p2 < size of nums 2
      // num2 > num1
      nums1[p] = nums2[p2]
      p2++
    }
  }

  return nums1
}

function merge3(nums1: number[], m: number, nums2: number[], n: number): number[] {
  let p1 = m - 1
  let p2 = n - 1
  // Iterate in reverse
  for (let p = m + n - 1; p >= 0; p--) {
    if (p2 < 0) {
      break // if done iterating over nums2
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1--
    } else {
      nums1[p] = nums2[p2]
      p2--
    }
  }
  return nums1
}

let tests = new Tests(
  [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
)

tests.run(
  merge1,
  merge2,
  merge3
)
