// https://projecteuler.net/problem=6
//
// The sum of the squares of the first ten natural numbers is,
//      1^2 + 2^2 + ... + 10^2 = 385.
//
// The square of the sum of the first ten natural numbers is,
//      (1 + 2 + ... + 10)^2 = 55^2 = 3025.
//
// Hence the difference between the sum of the squares of the first ten natural
// numbers and the square of the sum is 3025 - 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

import Tests from '../../TestHelpers'
import { range, sum, square } from '../utils'

function solution(max: number): number {
    const nums = range(1, max)
    return square(sum(nums)) - sum(nums.map(square))
}

const tests = new Tests([10, 2640], [100, 25164150])

tests.run(solution)
