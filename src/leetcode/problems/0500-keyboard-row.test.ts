// https://leetcode.com/problems/keyboard-row

import Tests from '../../TestHelpers'

function isSubset<T>(set: Set<T>, subset: Set<T>): boolean {
    for (let elem of subset) {
        if (!set.has(elem)) return false
    }
    return true
}

function findWords(words: string[]): string[] {
    let result = []
    let keyboard = [
        new Set('qwertyuiop'),
        new Set('asdfghjkl'),
        new Set('zxcvbnm'),
    ]
    for (let word of words) {
        let letters = new Set(word.toLowerCase())
        for (let row of keyboard) {
            if (isSubset(row, letters)) {
                result.push(word)
                break
            }
        }
    }
    return result
}

let tests = new Tests(
    [
        ['Hello', 'Alaska', 'Dad', 'Peace'],
        ['Alaska', 'Dad'],
    ],
    [['omk'], []],
    [
        ['adsdf', 'sfd'],
        ['adsdf', 'sfd'],
    ]
)

tests.run(findWords)
