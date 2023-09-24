// https://leetcode.com/problems/increasing-triplet-subsequence

import Tests from '../../TestHelpers'

function increasingTriplet1(nums: number[]): boolean {
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[j] && nums[j] < nums[k]) {
                    return true
                }
            }
        }
    }
    return false
}

function increasingTriplet2(nums: number[]): boolean {
    let num1 = Number.MAX_VALUE
    let num2 = Number.MAX_VALUE
    for (let n of nums) {
        if (n <= num1) {
            num1 = n
        } else if (n <= num2) {
            num2 = n
        } else {
            return true
        }
    }
    return false
}

let tests = new Tests(
    [[1, 2, 3, 4, 5], true],
    [[5, 4, 3, 2, 1], false],
    [[2, 1, 5, 0, 4, 6], true],
    [[20, 100, 10, 12, 5, 13], true],
    [[1, 5, 0, 4, 1, 3], true]
)

tests.run(increasingTriplet1, increasingTriplet2)
