import { range } from './sequence'

export function isEven(n: number): boolean {
    return isDivBy(n, 2)
}

export function isOdd(n: number): boolean {
    return !isEven(n)
}

export function isDivBy(a: number, b: number): boolean {
    return a % b === 0
}

export function isDivByAny(n: number, ...divisors: number[]): boolean {
    return divisors.some((d) => isDivBy(n, d))
}

export function isDivByAll(n: number, ...divisors: number[]): boolean {
    return divisors.every((d) => isDivBy(n, d))
}

export function isPrime(n: number): boolean {
    return !isDivByAny(n, ...range(2, Math.sqrt(n)))
}
