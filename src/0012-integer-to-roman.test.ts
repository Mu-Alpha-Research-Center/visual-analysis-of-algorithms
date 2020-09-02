// https://leetcode.com/problems/integer-to-roman

let RomanNumeral: { [key: string]: number } = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
}

function intToRoman(num: number): string {
  let result: string = ''

  return result
}

let testEach = test.each([
  //[3, 'III'],
  //[4, 'IV'],
  //[9, 'IX'],
  //[58, 'LVIII'],
  [1994, 'MCMXCIV'],
])

testEach('intToRoman(%p)', (a, expected) => expect(intToRoman(a)).toBe(expected))
