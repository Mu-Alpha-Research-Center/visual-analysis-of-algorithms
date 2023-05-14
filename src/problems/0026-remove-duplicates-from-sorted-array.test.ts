// https://leetcode.com/problems/remove-duplicates-from-sorted-array

import { runTests } from '../TestHelpers'

function removeDuplicates(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        let j = nums.length
        while (j > i) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1)
            }
            j--
        }
    }
    return nums.length
}

runTests(removeDuplicates, [
    [[1, 1, 2], 2],
    [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5],
])
