// https://projecteuler.net/problem=10
//
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

import Tests from '../../TestHelpers'
import { primeNumbers } from '../utils'

function solution(max: number): number {
    let sum = 0
    for (const n of primeNumbers()) {
        if (n > max) {
            break
        }
        sum += n
    }
    return sum
}

const tests = new Tests([10, 17])

tests.run(solution)
