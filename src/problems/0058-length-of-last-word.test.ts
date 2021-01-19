// https://leetcode.com/problems/length-of-last-word

import Tests from '../TestHelpers'

function lengthOfLastWord1(s: string): number {
  let result: number = 0
  let i: number = s.length - 1
  // Trim trailing spaces by looping in reverse to find the first non-whitespace
  // character. If there are any words, this will be the beginning of the last
  // word.
  for (i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== ' ') break
  }
  // If there are any words, this loop will count the characters in the last
  // word until it hits a whitespace which is the end of the last word.
  for (i; i >= 0; i--) {
    if (s.charAt(i) === ' ') {
      break
    }
    result += 1
  }
  // The time complexity is order of n.
  // The space complexity is order of 1.
  return result
}

function lengthOfLastWord2(s: string): number {
  let result: number = 0
  // This is a single-pass version of `lengthOfLastWord1`.
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== ' ') {
      // Count non-whitespace characters.
      result++
    } else if (result > 0) {
      // If we encounter whitespace and result > 0, we have hit the end of the
      // last word.
      break
    }
  }
  // The time complexity is order of n.
  // The space complexity is order of 1.
  return result
}

function lengthOfLastWord3(s: string): number {
  // The time complexity is order of n
  // The space complexity is order of n
  s = s.trim()
  return s.length - s.lastIndexOf(' ') - 1
}

function lengthOfLastWord4(s: string): number {
  // The time complexity is order of n
  // The space complexity is order of n
  return s.trim().split(' ').pop().length
}

let tests = new Tests(
  [' ', 0],
  ['a ', 1],
  ['Hello World', 5]
)

tests.run(
  lengthOfLastWord1,
  lengthOfLastWord2,
  lengthOfLastWord3,
  lengthOfLastWord4
)
