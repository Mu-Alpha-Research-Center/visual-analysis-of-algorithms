export function* range(a: number, b: number) {
    for (let n = a; n < b; n++) {
        yield n
    }
}

export function* generateFibonacci() {
    const memo = {}
    let n = 1
    while (true) {
        if (n in memo) {
            yield memo[n]
        } else {
            const m = fibonacci(n)
            memo[n] = m
            yield m
        }
        n++
    }
}

export function fibonacci(n: number): number {
    if (n <= 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
