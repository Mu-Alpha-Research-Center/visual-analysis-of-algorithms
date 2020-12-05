// https://leetcode.com/problems/letter-combinations-of-a-phone-number

import { runTests, todo } from './TestHelpers'

function digitToLetters(digit: string): string {
  let letters = {
    2: 'abc', 3: 'def', 4: 'ghi',
    5: 'jkl', 6: 'mno', 7: 'pqrs',
    8: 'tuv', 9: 'wxyz'
  }
  return letters[digit]
}

function digitsToLetters(digits: string): string[] {
  return digits.split('').map(digitToLetters)
}

function letterCombinations(digits: string): string[] {
  let toCombine: string[] = digitsToLetters(digits)
  return []
}

runTests(letterCombinations, [
  todo(['23'])
])
