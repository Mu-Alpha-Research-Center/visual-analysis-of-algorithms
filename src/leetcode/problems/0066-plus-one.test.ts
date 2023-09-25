// https://leetcode.com/problems/plus-one/description

import Tests from '../../TestHelpers'

function solution(digits: number[]): number[] {
    let remainder = 1
    let i = digits.length - 1
    let d = digits[i] + remainder
    if (d < 10) {
        digits[i] = d
        remainder = 0
    } else {
        digits[i] = 0
    }
    for (let i = digits.length - 1; i >= 0; i--) {
        if (remainder === 0) {
            break
        }
        let j = i - 1
        if (j > -1) {
            let d = digits[j] + remainder
            if (d < 10) {
                digits[j] = d
                remainder = 0
            } else {
                digits[j] = 0
            }
        } else {
            digits.unshift(remainder)
        }
    }
    return digits
}

let tests = new Tests(
    [
        [1, 2, 3],
        [1, 2, 4],
    ],
    [
        [4, 3, 2, 1],
        [4, 3, 2, 2],
    ],
    [[9], [1, 0]],
    [
        [9, 9],
        [1, 0, 0],
    ],
    [
        [8, 9, 9, 9],
        [9, 0, 0, 0],
    ]
)

tests.run(solution)
