// https://leetcode.com/problems/maximum-product-of-three-numbers

import Tests from '../../TestHelpers'

// O(n^3)
function maximumProduct1(nums: number[]): number {
    let maxProduct = -Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                if (i !== j && i !== k && j !== k) {
                    let product = nums[i] * nums[j] * nums[k]
                    if (product > maxProduct) {
                        maxProduct = product
                    }
                }
            }
        }
    }
    return maxProduct
}

// O(n log n)
function maximumProduct2(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let i = nums.length - 1
    let begProduct = nums[0] * nums[1] * nums[i]
    let endProduct = nums[i - 2] * nums[i - 1] * nums[i]
    return Math.max(begProduct, endProduct)
}

// O(n)
function maximumProduct3(nums: number[]): number {
    let min1 = Number.MAX_VALUE
    let min2 = Number.MAX_VALUE
    let max1 = -Number.MAX_VALUE
    let max2 = -Number.MAX_VALUE
    let max3 = -Number.MAX_VALUE
    for (let num of nums) {
        // Update min values
        if (num < min1) {
            min2 = min1
            min1 = num
        } else if (num < min2) {
            min2 = num
        }
        // Update max values
        if (num > max1) {
            max3 = max2
            max2 = max1
            max1 = num
        } else if (num > max2) {
            max3 = max2
            max2 = num
        } else if (num > max3) {
            max3 = num
        }
    }
    return Math.max(min1 * min2 * max1, max1 * max2 * max3)
}

let tests = new Tests(
    [[1, 2, 3], 6],
    [[1, 2, 3, 4], 24],
    [[-1, -2, -3], -6],
    [[-100, -98, -1, 2, 3, 4], 39200],
    [[-100, -2, -3, 1], 300]
)

tests.run(maximumProduct1, maximumProduct2, maximumProduct3)
