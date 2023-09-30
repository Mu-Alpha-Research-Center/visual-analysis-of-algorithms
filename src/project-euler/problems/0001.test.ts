// https://projecteuler.net/problem=1
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

import Tests from '../../TestHelpers'
import { divisibleBy, range } from '../utils'

function solution(n: number): number {
    let sum = 0
    for (const m of range(1, n)) {
        if (divisibleBy(m, 3) || divisibleBy(m, 5)) {
            sum += m
        }
    }
    return sum
}

const tests = new Tests([10, 23], [1000, 233168])

tests.run(solution)
