// https://leetcode.com/problems/longest-substring-without-repeating-characters

import { runTests } from '../../TestHelpers'

function lengthOfLongestSubstring(s: string): number {
    let max: string = ''
    let str: string = ''
    let i: number = 0
    let counts: { [key: string]: number } = {}

    while (i < s.length) {
        let c: string = s[i]

        counts[c] = c in counts ? counts[c] + 1 : 1

        if (counts[c] > 1) {
            if (str.length > max.length) {
                max = str
            }
            i -= str.length - 1
            str = ''
            counts = {}
        } else {
            str += c
            i++
        }
    }

    if (str.length > max.length) {
        max = str
    }

    return max.length
}

runTests(lengthOfLongestSubstring, [
    ['anviaj', 5],
    ['dvdf', 3],
    ['abcabcbb', 3],
    ['bbbbb', 1],
    ['pwwkew', 3],
])
