// https://leetcode.com/problems/valid-palindrome

import { Tests } from '../TestHelpers'

function isAlphaNum(s: string): boolean {
  return /[a-zA-Z0-9]/.test(s)
}

function isPalindrome(s: string): boolean {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    let a = s[i].toLowerCase()
    let b = s[j].toLowerCase()
    if (isAlphaNum(a) && isAlphaNum(b)) {
      if (a !== b) {
        return false
      }
      i++
      j--
    } else if (!isAlphaNum(a)) {
      i++
    } else if (!isAlphaNum(b)) {
      j--
    }
  }
  return true
}

let tests = new Tests(
  ['A man, a plan, a canal: Panama', true],
  ['race a car', false]
)

tests.run(isPalindrome)
