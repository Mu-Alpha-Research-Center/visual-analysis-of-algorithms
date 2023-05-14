// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer

import Tests from '../TestHelpers'

function subtractProductAndSum(n: number): number {
    let product = 1
    let sum = 0
    while (n > 0) {
        let lastDigit = n % 10
        product *= lastDigit
        sum += lastDigit
        n = Math.floor(n / 10)
    }
    // The time complexity is order of n.
    // The space complexity is order of 1.
    return product - sum
}

let tests = new Tests([234, 15], [4421, 21])

tests.run(subtractProductAndSum)
