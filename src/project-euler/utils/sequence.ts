export function* genRange(beg: number, end: number = Infinity) {
    for (let n = beg; n < end; n++) {
        yield n
    }
}

export function range(beg: number, end: number): number[] {
    let nums = []
    for (let n = beg; n <= end; n++) {
        nums.push(n)
    }
    return nums
}

export function reverseRange(beg: number, end: number): number[] {
    let nums = []
    for (let n = end; n >= beg; n--) {
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
