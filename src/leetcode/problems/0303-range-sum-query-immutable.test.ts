// https://leetcode.com/problems/range-sum-query-immutable

import Tests from '../../TestHelpers'

class NumArray {
    prefixSums: number[]

    constructor(nums: number[]) {
        this.prefixSums = []
        for (let i = 0; i < nums.length; i++) {
            this.prefixSums[i] =
                i === 0 ? nums[i] : this.prefixSums[i - 1] + nums[i]
        }
    }

    sumRange(i: number, j: number): number {
        if (i === 0) {
            return this.prefixSums[j]
        }
        return this.prefixSums[j] - this.prefixSums[i - 1]
    }
}

let tests = new Tests([
    ['NumArray', 'sumRange', 'sumRange', 'sumRange'],
    [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]],
    [null, 1, -1, -3],
])

tests.runClass(NumArray)
