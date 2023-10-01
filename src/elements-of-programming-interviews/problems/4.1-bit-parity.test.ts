import Tests from '../../TestHelpers'

function solution(n: number): number {
    let parity = 0
    while (n) {
        parity += n & 1
        n >>= 1
    }
    return parity % 2
}

const tests = new Tests([0b0011, 0], [0b0001, 1])

tests.run(solution)
