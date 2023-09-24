// https://leetcode.com/problems/3sum

import Tests from '../../TestHelpers'

function twoSum(nums: number[], i: number, res: number[][]) {
    let lo = i + 1
    let hi = nums.length - 1

    while (lo < hi) {
        let sum = nums[i] + nums[lo] + nums[hi]

        if (sum < 0) {
            lo++
        } else if (sum > 0) {
            hi--
        } else {
            res.push([nums[i], nums[lo++], nums[hi--]])
            while (lo < hi && nums[lo] === nums[lo - 1]) {
                lo++
            }
        }
    }
}

function threeSum(nums: number[]): number[][] {
    let res: number[][] = []

    nums.sort()

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i - 1] !== nums[i]) {
            twoSum(nums, i, res)
        }
    }

    return res
}

let tests = new Tests(
    [
        [-1, 0, 1, 2, -1, -4],
        [
            [-1, -1, 2],
            [-1, 0, 1],
        ],
    ],
    [[], []],
    [[0], []],
    [[-2, 0, 0, 2, 2], [[-2, 0, 2]]]
)

tests.run(threeSum)
