// https://projecteuler.net/problem=5
//
// 2520 is the smallest number that can be divided by each of the numbers from
// 1 to 10 without any remainder. What is the smallest positive number that is
// evenly divisible with no remainder by all of the numbers from 1 to 20?

import Tests from '../../TestHelpers'
import { genRange, range, isDivByAll } from '../utils'

function solution(max: number): number {
    for (const n of genRange(1)) {
        if (isDivByAll(n, ...range(1, max))) {
            return n
        }
    }
    return -1
}

const tests = new Tests([10, 2520])

tests.run(solution)
