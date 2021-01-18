// https://leetcode.com/problems/reverse-string

import { Tests } from '../TestHelpers'

function reverseString1(s: string[]): string[] {
  return s.reverse()
}

function reverseString2(s: string[]): string[] {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    let tmp = s[i]
    s[i++] = s[j]
    s[j--] = tmp
  }
  return s
}

let tests = new Tests(
  [['a', 'b', 'c'], ['c', 'b', 'a']],
  [['h','e','l','l','o'], ['o','l','l','e','h']]
)

tests.run(
  reverseString1,
  reverseString2
)
