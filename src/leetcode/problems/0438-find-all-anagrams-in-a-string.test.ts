// https://leetcode.com/problems/find-all-anagrams-in-a-string/

import { runTests } from '../../TestHelpers'

class LetterHash {
    hash: number[]

    constructor() {
        this.hash = []

        for (let i = 0; i < 26; i++) {
            this.hash.push(0)
        }
    }

    equals(otherHash: LetterHash): boolean {
        return this.toString() === otherHash.toString()
    }

    increment(c: string) {
        let i: number = c.charCodeAt(0) - 'a'.charCodeAt(0)
        let n: number = this.hash[i]

        this.hash[i] = n ? n + 1 : 1
    }

    toString(): string {
        return this.hash.join('')
    }
}

function findAnagrams(s: string, p: string): number[] {
    let result: number[] = []
    let hash: LetterHash = new LetterHash()

    for (let c of p) {
        hash.increment(c)
    }

    for (let beg = 0; beg < s.length; beg++) {
        let end: number = beg + p.length
        let otherHash: LetterHash = new LetterHash()

        for (let i = beg; i < end && i < s.length; i++) {
            otherHash.increment(s[i])
        }

        if (hash.equals(otherHash)) {
            result.push(beg)
        }
    }

    return result
}

runTests(findAnagrams, [
    ['cbaebabacd', 'abc', [0, 6]],
    ['abab', 'ab', [0, 1, 2]],
    ['ab', 'cd', []],
])
