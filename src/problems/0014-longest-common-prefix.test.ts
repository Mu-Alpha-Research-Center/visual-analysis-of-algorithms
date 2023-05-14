// https://leetcode.com/problems/longest-common-prefix

import Tests from '../TestHelpers'

function longestCommonPrefix1(strs: string[]): string {
    // Scan strings vertically, column by column until you hit a non-matching
    // character, and finally return the matching portion of the first string.
    if (strs.length === 0) return ''
    let str = strs[0]
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i)
        for (let j = 1; j < strs.length; j++) {
            let otherStr = strs[j]
            let otherChar = otherStr.charAt(i)
            if (otherChar !== char) {
                return str.substring(0, i)
            }
        }
    }
    return str
}

function longestCommonPrefix2(strs: string[]): string {
    if (strs.length === 0) return ''
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        // Visit other strings, and iteration by iteration,
        // shorten the prefix until it matches all strings.
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === '') return ''
        }
    }
    return prefix
}

let tests = new Tests(
    [[], ''],
    [['flower', 'flow', 'flight'], 'fl'],
    [['dog', 'racecar', 'car'], '']
)

tests.run(longestCommonPrefix1, longestCommonPrefix2)
