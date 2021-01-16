// https://leetcode.com/problems/add-binary

import { Tests } from '../TestHelpers'

function addBinary1(a: string, b: string): string {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
}

function addBinary2(a: string, b: string): string {
  let result:string[] = []
  let carry:number = 0
  let n:number = Math.max(a.length, b.length)

  a = a.padStart(n, '0')
  b = b.padStart(n, '0')

  for (let i = n - 1; i > -1; i--) {
    if (a[i] === '1') carry++
    if (b[i] === '1') carry++
    if (carry % 2 === 1) {
      result.push('1')
    } else {
      result.push('0')
    }
    carry = Math.floor(carry / 2)
  }

  if (carry === 1) result.push('1')

  return result.reverse().join('')
}

let tests = new Tests(
  ['0', '0', '0'],
  ['1', '1', '10'],
  ['11', '1', '100'],
  ['1010', '1011', '10101'],
  [
    '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011',
    '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000'
  ]
)

tests.run(
  addBinary1,
  addBinary2
)
