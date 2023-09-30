export function isEven(n: number): boolean {
    return n % 2 === 0
}

export function isOdd(n: number): boolean {
    return !isEven(n)
}

export function divisibleBy(a: number, b: number): boolean {
    return a % b === 0
}
