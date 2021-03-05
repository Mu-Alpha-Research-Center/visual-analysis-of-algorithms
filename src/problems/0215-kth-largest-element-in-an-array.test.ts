// https://leetcode.com/problems/kth-largest-element-in-an-array

import Tests from '../TestHelpers'
import PriorityQueue from '../DataStructures/PriorityQueue'

function findKthLargest1(nums: number[], k: number): number {
  return nums.sort((a, b) => b - a)[k - 1]
}

function findKthLargest2(nums: number[], k: number): number {
  let heap = new PriorityQueue<number>((a, b) => a - b);
  for (let n of nums) {
    heap.add(n)
    if (heap.size() > k) {
      heap.poll()
    }
  }
  return heap.poll()
}

let tests = new Tests(
  [[3, 2, 1, 5, 6, 4], 2, 5],
  [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4, 4]
)

tests.run(findKthLargest1, findKthLargest2)
