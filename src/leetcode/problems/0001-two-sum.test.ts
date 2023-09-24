// https://leetcode.com/problems/two-sum

import Tests from '../../TestHelpers'

function twoSum1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}

function twoSum2(nums: number[], target: number): number[] {
    let map: Record<number, number> = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (complement in map) {
            let j = map[complement]
            if (i !== j) {
                return [i, j]
            }
        }
    }
    return []
}

function twoSum3(nums: number[], target: number): number[] {
    let map: Record<number, number> = {}
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]

        if (complement in map) {
            return [map[complement], i]
        }
        map[nums[i]] = i
    }
    return []
}

let tests = new Tests(
    [[2, 7, 11, 15], 9, [0, 1]],
    [[2, 7, 11, 15], 8, []],
    [[3, 2, 4], 6, [1, 2]]
)

tests.run(twoSum1, twoSum2, twoSum3)
