// https://projecteuler.net/problem=9
//
// A Pythagorean triplet is a set of three natural numbers, a < b < c,
// for which, a^2 + b^2 = c^2. For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product a * b * c.

import Tests from '../../TestHelpers'
import { range } from '../utils'

function solution(sum: number): number {
    for (const a of range(1, sum)) {
        for (const b of range(a + 1, sum)) {
            const c = sum - (a + b)
            if (a + b + c === sum && isPythagoreanTriple(a, b, c)) {
                return a * b * c
            }
        }
    }
    return -1
}

function isPythagoreanTriple(a: number, b: number, c: number): boolean {
    return a ** 2 + b ** 2 === c ** 2
}

const tests = new Tests([1000, 31875000])

tests.run(solution)
