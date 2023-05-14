// https://leetcode.com/problems/remove-element

import { runTests } from '../TestHelpers'

function removeElement(nums: number[], val: number): number {
    let i = nums.length
    while (i > -1) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        }
        i--
    }
    return nums.length
}

runTests(removeElement, [
    [[3, 2, 2, 3], 3, 2],
    [[0, 1, 2, 2, 3, 0, 4, 2], 2, 5],
])
