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

test('lengthOfLongestSubstring', () => {
  expect(lengthOfLongestSubstring('anviaj')).toBe(5)
  expect(lengthOfLongestSubstring('dvdf')).toBe(3)
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})
