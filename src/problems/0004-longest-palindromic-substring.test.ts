// https://leetcode.com/problems/longest-palindromic-substring

import Tests from '../TestHelpers'

function longestPalindrome(s: string): string {
    let result = ''
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length; j > i; j--) {
            const t = s.slice(i, j)
            if (t.length > result.length && isPalindrome(t)) {
                result = t
                break
            }
        }
    }
    return result
}

function isPalindrome(s: string): boolean {
    for (let i = 0; i < s.length / 2; i++) {
        const j = s.length - 1 - i
        if (s[i] !== s[j]) {
            return false
        }
    }
    return true
}

let tests = new Tests(['babad', 'bab'], ['cbbd', 'bb'], ['a', 'a'])

tests.run(longestPalindrome)
