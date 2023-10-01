export function isEven(n: number): boolean {
    return n % 2 === 0
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
