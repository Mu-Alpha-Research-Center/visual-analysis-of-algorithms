// https://leetcode.com/problems/sqrtx/description

import Tests from '../../TestHelpers'

function solution(x: number): number {
    let i = 1
    let result = 1
    while (result <= x) {
        i++
        result = i * i
    }
    return i - 1
}

let tests = new Tests([4, 2], [8, 2], [3, 1])

tests.run(solution)
