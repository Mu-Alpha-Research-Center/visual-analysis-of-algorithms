// https://projecteuler.net/problem=2
//
// Each new term in the Fibonacci sequence is generated by adding the previous
// two terms. By starting with 1 and 2, the first 10 terms will be:
//      1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// By considering the terms in the Fibonacci sequence whose values do not
// exceed four million, find the sum of the even-valued terms.

import Tests from '../../TestHelpers'
import { fibonacciNumbers, isEven } from '../utils'

function solution(max: number): number {
    let sum = 0
    for (const n of fibonacciNumbers()) {
        if (n > max) {
            break
        } else if (isEven(n)) {
            sum += n
        }
    }
    return sum
}

const tests = new Tests([4_000_000, 4_613_732])

tests.run(solution)
