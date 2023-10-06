// https://projecteuler.net/problem=7
//
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
//
// What is the 10,001st prime number?

import Tests from '../../TestHelpers'
import { primeNumbers } from '../utils'

function solution(n: number): number {
    for (const m of primeNumbers()) {
        if (n === 1) {
            return m
        }
        n--
    }
    return -1
}

const tests = new Tests([6, 13], [10_001, 104_743])

tests.run(solution)
