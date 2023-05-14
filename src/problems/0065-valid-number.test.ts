// https://leetcode.com/problems/valid-number

import { runTests } from '../TestHelpers'

function isDigit(s: string): boolean {
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let digit in digits) {
        if (s === digit) return true
    }
    return false
}

function count(s: string, pattern: string): number {
    let n = 0
    for (let c of s) {
        if (c === pattern) n++
    }
    return n
}

type Counts = { [key: string]: number }

function getCounts(s: string): Counts {
    let counts: Counts = {}
    for (let c of s) {
        counts[c] = c in counts ? counts[c] + 1 : 1
    }
    return counts
}

function isNumber(s: string): boolean {
    s = s.trim()
    let c: string,
        i: number = 0,
        counts: Counts = getCounts(s)
    let next = () => (c = s[++i])
    let nextWhile = (p) => {
        while (p(c)) next()
    }
    let atEnd = () => i >= s.length
    if (counts['.'] > 1) return false
    if (counts['e'] > 1) return false
    if (counts['-'] > 1) return false
    if (counts['+'] > 1) return false
    if (s.length === 0) return false
    if (s[i] === 'e') return false
    while (!atEnd()) {
        c = s[i]
        if (c === '+' || c === '-' || c === '.') {
            next()
            if (!isDigit(c) && c !== '.') return false
        } else if (isDigit(c)) {
            next()
            nextWhile(isDigit)
            if (atEnd() || c === 'e') {
            } else if (c === '.') {
                next()
            } else {
                return false
            }
        } else if (c === 'e') {
            next()
            if (atEnd()) return false
            nextWhile(isDigit)
            if (s[i] === '.') return false
        } else {
            return false
        }
    }
    return true
}

runTests(isNumber, [
    ['46.e3', true],
    ['+.8', true],
    ['.1', true],
    ['3.', true],
    ['0', true],
    [' 0.1 ', true],
    ['2e10', true],
    [' -90e3   ', true],
    [' 6e-1', true],
    ['53.5e93', true],
    [' ', false],
    ['.1.', false],
    ['abc', false],
    ['1 a', false],
    ['95a54e53', false],
    [' 1e', false],
    ['e3', false],
    [' 99e2.5 ', false],
    [' --6 ', false],
    ['-+3', false],
    ['1 4', false],
    ['3-2', false],
    ['..2', false],
    ['6ee69', false],
])
