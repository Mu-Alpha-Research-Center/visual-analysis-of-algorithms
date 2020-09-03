// https://leetcode.com/problems/implement-strstr

function strStr(haystack: string, needle: string): number {
  if (haystack.startsWith(needle)) {
    return 0
  }
  for (let i = 0; i < haystack.length; i++) {
    if (needle === haystack.substr(i, needle.length)) {
      return i
    }
  }
  return -1
}

let testEach = test.each([
  ['', '', 0],
  ['hello', 'll', 2],
  ['aaaaa', 'bba', -1]
])

testEach('strStr(%p, %p)', (a, b, expected) => expect(strStr(a, b)).toBe(expected))
