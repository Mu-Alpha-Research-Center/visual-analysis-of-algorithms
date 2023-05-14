// https://leetcode.com/problems/maximum-product-subarray

import Tests from '../TestHelpers'

function maxProduct(nums: number[]): number {
    let max = -Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        let products = [nums[i]]
        for (let j = i + 1; j < nums.length; j++) {
            products.push(nums[j] * products[products.length - 1])
        }
        let otherMax = Math.max(...products)
        if (otherMax > max) {
            max = otherMax
        }
    }
    return max
}

let tests = new Tests([[2, 3, -2, 4], 6], [[-2, 0, -1], 0])

tests.run(maxProduct)
