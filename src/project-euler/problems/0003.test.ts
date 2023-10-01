// https://projecteuler.net/problem=3
//
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

import Tests from '../../TestHelpers'
import { isDivBy, isPrime, genRange } from '../utils'

function solution(n: number): number {
    const primeFactors = [...genRange(2, n)].filter(
        (m) => isDivBy(n, m) && isPrime(m)
    )
    return primeFactors.at(-1)
}

const tests = new Tests([13195, 29])

tests.run(solution)
