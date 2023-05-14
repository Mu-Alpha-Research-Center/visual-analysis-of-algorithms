// https://leetcode.com/problems/valid-anagram

import Tests from '../TestHelpers'

function sort(s: string): string {
    return [...s].sort().join('')
}

function isAnagram1(s: string, t: string): boolean {
    return sort(s) === sort(t)
}

function getOffset(s: string, i: number): number {
    return s.charCodeAt(i) - 'a'.charCodeAt(0)
}

function isAnagram2(s: string, t: string): boolean {
    let counter = Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        counter[getOffset(s, i)]++
        counter[getOffset(t, i)]--
    }
    for (let count of counter) {
        if (count !== 0) return false
    }
    return true
}

let tests = new Tests(['anagram', 'nagaram', true], ['rat', 'car', false])

tests.run(isAnagram1, isAnagram2)
