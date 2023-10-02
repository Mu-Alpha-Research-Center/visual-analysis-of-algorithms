export function* genRange(a: number, b: number) {
    for (let n = a; n < b; n++) {
        yield n
    }
}

export function range(a: number, b: number): number[] {
    let nums = []
    for (let n = a; n < b; n++) {
        nums.push(n)
    }
    return nums
}

export function* genFib(max?: number) {
    const memo = {}
    let n = 1
    while (true) {
        let m: number = n in memo ? memo[n] : fib(n)
        if (m && m > max) {
            break
        }
        yield m
        memo[n] = m
        n++
    }
}

export function fib(n: number): number {
    if (n == 0 || n == 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

export function sum(numbers: number[]): number {
    return numbers.reduce((a, n) => a + n, 0)
}
