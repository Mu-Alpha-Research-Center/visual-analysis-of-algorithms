// https://leetcode.com/problems/letter-combinations-of-a-phone-number
// https://www.geeksforgeeks.org/permutation-and-combination

import { runTests } from './TestHelpers'

function digitsToLetterGroups(digits: string): string[][] {
  let letters: Record<number, string> = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  return digits.split('').map(digit => letters[digit].split(''))
}

function letterCombinations(digits: string): string[] {
  let result: string[] = []
  let groups: string[][] = digitsToLetterGroups(digits)

  if (groups.length === 1) {
    for (let a of groups[0]) {
      result.push(a)
    }
  } else if (groups.length === 2) {
    for (let a of groups[0]) {
      for (let b of groups[1]) {
        result.push(a + b)
      }
    }
  } else if (groups.length === 3) {
    for (let a of groups[0]) {
      for (let b of groups[1]) {
        for (let c of groups[2]) {
          result.push(a + b + c)
        }
      }
    }
  } else if (groups.length === 4) {
    for (let a of groups[0]) {
      for (let b of groups[1]) {
        for (let c of groups[2]) {
          for (let d of groups[3]) {
            result.push(a + b + c + d)
          }
        }
      }
    }
  }

  return result
}

runTests(letterCombinations, [
  ['', []],
  ['2', ['a', 'b', 'c']],
  ['23', ['ad','ae','af','bd','be','bf','cd','ce','cf']],
  ['234', ['adg','adh','adi','aeg','aeh','aei','afg','afh','afi','bdg','bdh','bdi','beg','beh','bei','bfg','bfh','bfi','cdg','cdh','cdi','ceg','ceh','cei','cfg','cfh','cfi']]
])
