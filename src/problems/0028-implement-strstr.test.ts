// https://leetcode.com/problems/implement-strstr

import Tests, { holog } from '../TestHelpers'

function strStr1(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (needle === haystack.substring(i, i + needle.length)) {
      return i
    }
  }
  return -1
}

function charToNum(c: string): number {
  return c.charCodeAt(0) - 96
}

function hashNoOrder(s: string): number {
  return [...s].reduce((result, c) => result + charToNum(c), 0)
}

function hashWithOrder(s: string): number {
  let result = 0
  for (let i = 0; i < s.length; i++) {
    let c = charToNum(s[i])
    let m = 10**(s.length - 1 - i)
    result += c * m
  }
  return result
}

function hashWithModulo(s: string): number {
  return hashWithOrder(s) % 113
}

function strStr2(haystack: string, needle: string): number {
  let a = holog(hashNoOrder)
  a('abcd')
  a('dcba')

  let b = holog(hashWithOrder)
  b('abcd')
  b('dcba')

  let c = holog(hashWithModulo)
  c('abcd')
  c('dcba')

  return -1
}

let tests = new Tests(
  ['', '', -1],
  //['', '', 0],
  //['hello', 'll', 2],
  //['aaaaa', 'bba', -1]
)

tests.run(strStr2)
