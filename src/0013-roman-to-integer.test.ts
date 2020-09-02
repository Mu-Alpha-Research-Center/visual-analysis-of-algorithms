// https://leetcode.com/problems/roman-to-integer

let RomanNumeral: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanToInt(s: string): number {
  let result: number = 0
  for (let i = 0; i < s.length; i++) {
    let curr:number = RomanNumeral[s[i]],
        next:number = RomanNumeral[s[i + 1]]
    result += next > curr ? -curr : curr
  }
  return result
}

let testEach = test.each([
  ['III', 3],
  ['IV', 4],
  ['IX', 9],
  ['LVIII', 58],
  ['MCMXCIV', 1994],
])

testEach('romanToInt(%p)', (a, expected) => expect(romanToInt(a)).toBe(expected))
