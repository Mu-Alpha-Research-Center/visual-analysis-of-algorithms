// https://leetcode.com/problems/kth-largest-element-in-an-array

import Tests from '../TestHelpers'
import { Heap } from 'heap-js'

function findKthLargest1(nums: number[], k: number): number {
    return nums.sort((a, b) => b - a)[k - 1]
}

function findKthLargest2(nums: number[], k: number): number {
    const minHeap = new Heap()
    for (let n of nums) {
        minHeap.add(n)
        if (minHeap.size() > k) {
            minHeap.pop()
        }
    }
    return minHeap.pop() as number
}

let tests = new Tests(
    [[3, 2, 1, 5, 6, 4], 2, 5],
    [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4, 4]
)

tests.run(findKthLargest2)
