// https://leetcode.com/problems/intersection-of-two-arrays

import Tests from '../../TestHelpers'

function intersection(nums1: number[], nums2: number[]): number[] {
    let result = []
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    for (let item of set2) {
        if (set1.has(item)) result.push(item)
    }
    return result
}

let tests = new Tests(
    [[1, 2, 2, 1], [2, 2], [2]],
    [
        [4, 9, 5],
        [9, 4, 9, 8, 4],
        [9, 4],
    ]
)

tests.run(intersection)
