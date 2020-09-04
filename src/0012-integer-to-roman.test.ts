// https://leetcode.com/problems/integer-to-roman

declare let runTests

function intToRoman(num: number): string {
  let result = ''
  let romanNumerals: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  for (let [romanNumeral, value] of Object.entries(romanNumerals)) {
    while (num >= value) {
      num -= value
      result += romanNumeral
    }
  }
  return result
}

runTests(intToRoman, [
  [3, 'III'],
  [4, 'IV'],
  [9, 'IX'],
  [58, 'LVIII'],
  [1994, 'MCMXCIV']
])
