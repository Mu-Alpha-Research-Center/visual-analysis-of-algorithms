// https://projecteuler.net/problem=4
//
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 x 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

import Tests from '../../TestHelpers'
import { rangeReverse } from '../utils'

function solution(n: number): number {
    let result = 0
    const max = 10 ** n
    const nums = [...rangeReverse(max / 2, max)]
    for (const a of nums) {
        for (const b of nums) {
            const p = a * b
            if (p > result && isPalindrome(p)) {
                result = p
            }
        }
    }
    return result
}

function isPalindrome(n: number): boolean {
    return n === reverseNumber(n)
}

/**
 * Remove digits from n one by one and add them to m.
 *
 * | n   | m   |
 * | --- | --- |
 * | 123 |   0 |
 * | 12  |  30 |
 * | 1   | 320 |
 * | 0   | 321 |
 */
function reverseNumber(n: number): number {
    let m = 0
    while (n > 0) {
        m = m * 10 + (n % 10)
        n = ~~(n / 10)
    }
    return m
}

const tests = new Tests([2, 9009], [3, 906609])

tests.run(solution)
