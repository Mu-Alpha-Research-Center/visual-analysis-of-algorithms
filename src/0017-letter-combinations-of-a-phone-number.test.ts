// https://leetcode.com/problems/letter-combinations-of-a-phone-number
// https://www.geeksforgeeks.org/permutation-and-combination

import { runTests, todo } from './TestHelpers'

function digitsToLetterGroups(digits: string): string[][] {
  let letters = {
    2: 'abc', 3: 'def', 4: 'ghi',
    5: 'jkl', 6: 'mno', 7: 'pqrs',
    8: 'tuv', 9: 'wxyz'
  }
  return digits.split('').map(digit => letters[digit].split(''))
}

function letterCombinations(digits: string): string[] {
  let result: string[] = []
  let groups: string[][] = digitsToLetterGroups(digits)
  let letters: string[] = groups.shift()

  if (groups.length === 0) {
    return result
  } else if (groups.length === 1) {
    return groups.pop()
  }

  return result
}

runTests(letterCombinations, [
  ['', []],
  ['2', ['a', 'b', 'c']],
  todo(['23', ['ad','ae','af','bd','be','bf','cd','ce','cf']]),
  todo(['234', ['adg','adh','adi','aeg','aeh','aei','afg','afh','afi','bdg','bdh','bdi','beg','beh','bei','bfg','bfh','bfi','cdg','cdh','cdi','ceg','ceh','cei','cfg','cfh','cfi']])
])
