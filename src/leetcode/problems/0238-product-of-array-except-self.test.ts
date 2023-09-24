// https://leetcode.com/problems/product-of-array-except-self

import Tests from '../../TestHelpers'

function productExceptSelf1(nums: number[]): number[] {
    // This quadratic solution is too slow, but I think it's still interesting
    // because it uses the sliding window technique combined with modulo math to
    // slide the window around the array like it's a circular array.
    //
    // 2 things come to mind.
    //
    // 1. I could imagine this being the solution for another problem.
    //    https://www.geeksforgeeks.org/circular-array
    // 2. Knowing how to wrap an index back around to the beginning of an array
    //    using modulo math is interesting by itself.
    let result: number[] = []
    let n: number = nums.length

    for (let beg = 0; beg < n; beg++) {
        let i = beg
        let end = (beg + n - 1) % n
        let product = 1

        while (i !== end) {
            product *= nums[i]
            i = (i + 1) % n
        }

        result[end] = product
    }

    return result
}

function productExceptSelf2(nums: number[]): number[] {
    let result: number[] = []
    let length: number = nums.length
    let L: number[] = []
    let R: number[] = []

    L[0] = 1
    for (let i = 1; i < length; i++) {
        L[i] = nums[i - 1] * L[i - 1]
    }

    R[length - 1] = 1
    for (let i = length - 2; i >= 0; i--) {
        R[i] = nums[i + 1] * R[i + 1]
    }

    for (let i = 0; i < length; i++) {
        result[i] = L[i] * R[i]
    }

    return result
}

function productExceptSelf3(nums: number[]): number[] {
    let length: number = nums.length
    let result: number[] = [1]
    let R: number = 1

    for (let i = 1; i < length; i++) {
        result[i] = nums[i - 1] * result[i - 1]
    }

    for (let i = length - 1; i >= 0; i--) {
        result[i] = result[i] * R
        R *= nums[i]
    }

    return result
}

let tests = new Tests(
    [
        [1, 2, 3, 4],
        [24, 12, 8, 6],
    ],
    [
        [0, 0],
        [0, 0],
    ],
    [
        [1, 0],
        [0, 1],
    ]
)

tests.run(productExceptSelf1, productExceptSelf2, productExceptSelf3)
