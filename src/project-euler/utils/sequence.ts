import { fibonacciNumber, isPrime } from './number'

export function* range(beg: number, end: number = Infinity) {
    for (let n = beg; n <= end; n++) {
        yield n
    }
}

export function* rangeReverse(beg: number, end: number) {
    for (let n = end; n >= beg; n--) {
        yield n
    }
}

export function* fibonacciNumbers() {
    for (const n of range(1)) {
        yield fibonacciNumber(n)
    }
}

export function* primeNumbers() {
    for (const n of range(2)) {
        if (isPrime(n)) {
            yield n
        }
    }
}

export function sum(numbers: number[]): number {
    return numbers.reduce((sum, n) => sum + n, 0)
}

export function product(numbers: number[]): number {
    return numbers.reduce((product, n) => product * n, 1)
}
