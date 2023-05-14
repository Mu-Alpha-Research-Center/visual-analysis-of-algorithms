// https://leetcode.com/problems/letter-combinations-of-a-phone-number
// https://www.geeksforgeeks.org/permutation-and-combination

import { runTests } from '../TestHelpers'

function letterCombinations(digits: string): string[] {
    let digitToLetters: Record<string, string[]> = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    let groups: string[][] = digits
        .split('')
        .map((digit) => digitToLetters[digit])

    return groups.length === 0 ? [] : combineLetters('', ...groups)
}

function combineLetters(letter: string, ...groups: string[][]): string[] {
    let result: string[] = []

    if (groups.length === 0) {
        result.push(letter)
    } else {
        let nextGroup = groups.shift()

        for (let otherLetter of nextGroup) {
            result = result.concat(
                combineLetters(letter + otherLetter, ...groups)
            )
        }
    }

    return result
}

runTests(letterCombinations, [
    ['', []],
    ['2', ['a', 'b', 'c']],
    ['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']],
    [
        '234',
        [
            'adg',
            'adh',
            'adi',
            'aeg',
            'aeh',
            'aei',
            'afg',
            'afh',
            'afi',
            'bdg',
            'bdh',
            'bdi',
            'beg',
            'beh',
            'bei',
            'bfg',
            'bfh',
            'bfi',
            'cdg',
            'cdh',
            'cdi',
            'ceg',
            'ceh',
            'cei',
            'cfg',
            'cfh',
            'cfi',
        ],
    ],
])
