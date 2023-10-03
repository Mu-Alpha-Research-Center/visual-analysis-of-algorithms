// https://projecteuler.net/problem=4
//
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 x 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

import Tests from '../../TestHelpers'
import { range } from '../utils'

function solution(n: number): number {
    let result = 0
    const max = 10 ** n
    const nums = range(max / 2, max).reverse()
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
    return n === reverseDigits(n)
}

function reverseDigits(n: number): number {
    let result = 0
    while (n > 0) {
        result = result * 10 + (n % 10)
        n = Math.floor(n / 10)
    }
    return result
}

const tests = new Tests([2, 9009], [3, 906609])

tests.run(solution)
