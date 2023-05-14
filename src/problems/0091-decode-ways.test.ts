// https://leetcode.com/problems/decode-ways

import Tests from '../TestHelpers'

let memo: Map<number, number> = new Map()

function go(index: number, str: string): number {
    if (memo.has(index)) {
        return memo.get(index)
    }
    if (index === str.length) {
        return 1
    } else if (str.charAt(index) === '0') {
        return 0
    } else if (index === str.length - 1) {
        return 1
    }
    let answer = go(index + 1, str)
    if (parseInt(str.substring(index, index + 2), 10) <= 26) {
        answer += go(index + 2, str)
    }
    memo.set(index, answer)
    return answer
}

function numDecodings(s: string): number {
    memo = new Map()
    return go(0, s)
}

let tests = new Tests(['226', 3])

tests.run(numDecodings)
