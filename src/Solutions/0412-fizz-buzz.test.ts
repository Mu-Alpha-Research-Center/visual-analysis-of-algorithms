// https://leetcode.com/problems/fizz-buzz

import { Tests } from '../TestHelpers'

function fizzBuzz1(n: number): string[] {
  let result: string[] = []
  for (let m = 1; m < n + 1; m++) {
    let divBy3: boolean = m % 3 === 0
    let divBy5: boolean = m % 5 === 0
    if (divBy3 && divBy5) {
      result.push('FizzBuzz')
    } else if (divBy3) {
      result.push('Fizz')
    } else if (divBy5) {
      result.push('Buzz')
    } else {
      result.push(m.toString())
    }
  }
  return result
}

function fizzBuzz2(n: number): string[] {
  let result: string[] = []
  for (let m = 1; m < n + 1; m++) {
    let answer: string = ''
    let divBy3: boolean = m % 3 === 0
    let divBy5: boolean = m % 5 === 0
    if (divBy3) {
      answer += 'Fizz'
    }
    if (divBy5) {
      answer += 'Buzz'
    }
    if (answer.length === 0) {
      answer += m
    }
    result.push(answer)
  }
  return result
}

function fizzBuzz3(n: number): string[] {
  let result: string[] = []
  let map: [number, string][] = [
    [3, 'Fizz'],
    [5, 'Buzz']
  ]
  for (let m = 1; m < n + 1; m++) {
    let answer: string = ''
    for (let [key, value] of map) {
      if (m % key === 0) {
        answer += value
      }
    }
    if (answer.length === 0) {
      answer += m
    }
    result.push(answer)
  }
  return result
}

let tests = new Tests(
  [
    15,
    [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz'
    ]
  ]
)

tests.run(fizzBuzz1, fizzBuzz2, fizzBuzz3)
