// https://leetcode.com/problems/string-to-integer-atoi

function isDigit(str: string): boolean {
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (let digit in digits) {
    if (str === digit) return true
  }
  return false
}

function parseInt32(str: string): number {
  let max = 2 ** 31 - 1
  let min = -(2 ** 31)
  let int = parseInt(str === '' ? '0' : str, 10)
  if (int > max) {
    int = max
  } else if (int < min) {
    int = min
  }
  return int
}

function myAtoi(str: string): number {
  let pos = 0
  let num = ''

  let chomp = () => {
    let c = str[pos]
    num += c
    // console.log({ pos, c, num })
    pos++
  }

  str = str.trim()

  while (pos <= str.length) {
    let c = str[pos]

    if (c === '-' || c === '+') {
      if (!isDigit(str[pos + 1])) {
        break
      }
      chomp()
    } else if (isDigit(c)) {
      chomp()
    } else {
      break
    }
  }

  return parseInt32(num)
}

const testEach = test.each([
  ['42', 42],
  ['   -42', -42],
  ['4193 with words', 4193],
  ['words and 987', 0],
  ['-91283472332', -2147483648],
  ['-', 0],
  ['+1', 1],
  ['2147483648', 2147483647]
])

testEach('myAtoi(%p)', (a, expected) => expect(myAtoi(a)).toBe(expected))
