// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let longestStr: string = '',
      i: number = 0,
      str: string = '',
      counts: { [key:string]: number } = {}
  while (i < s.length) {
    let c:string = s[i]
    counts[c] = c in counts ? counts[c] + 1 : 1
    if (counts[c] > 1) {
      if (str.length > longestStr.length) {
        longestStr = str
      }
      i -= str.length - 1
      str = ''
      counts = {}
    } else {
      str += c
      i++
    }
  }
  if (str.length > longestStr.length) {
    longestStr = str
  }
  return longestStr.length
}

let testEach = test.each([
  ['anviaj', 5],
  ['dvdf',3],
  ['abcabcbb', 3],
  ['bbbbb', 1],
  ['pwwkew', 3],
])

testEach('lengthOfLongestSubtring(%p)', (a, expected) => {
  expect(lengthOfLongestSubstring(a)).toBe(expected)
})
