// https://leetcode.com/problems/basic-calculator-ii

import Tests from '../../TestHelpers'

const isDigit = (s: string): boolean => /\d/.test(s)
const isOperator = (s: string): boolean => /[+\-*/]/.test(s)

function calculate(s: string): number {
    let result: number = 0
    let stack: number[] = []
    let currentNumber: number = 0
    let currentOperation: string = '+'

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i]

        if (isDigit(currentChar)) {
            // This is super cool because you can parse simple integers in linear
            // time by shifting the current number over by multiplying by 10, parsing
            // the current char as an integer, and adding it to the current number.
            //
            // Normally, you would have to use a second while loop to parse numbers
            // since they are more complicated.
            currentNumber = currentNumber * 10 + parseInt(currentChar, 10)
        }

        let endOfString = i === s.length - 1
        // Here is where the magic happens. Basically, we are simplifying the
        // entire expression into addition by:
        // 1. transforming subtraction into addtion by negating the current number.
        //    For example, `1 - 1` is equal to `1 + (-1)`.
        // 2. performing multiplication and division as we see them because they
        //    have a higher operator precedence than addition or subtraction.
        if (isOperator(currentChar) || endOfString) {
            if (currentOperation === '-') {
                stack.push(-currentNumber)
            } else if (currentOperation === '+') {
                stack.push(currentNumber)
            } else {
                let prevNumber = stack.pop()
                if (currentOperation === '*') {
                    stack.push(prevNumber * currentNumber)
                } else if (currentOperation === '/') {
                    stack.push(Math.floor(prevNumber / currentNumber))
                }
            }
            currentNumber = 0
            currentOperation = currentChar
        }
    }

    // Sum everything that's leftover on the stack.
    while (stack.length > 0) {
        result += stack.pop()
    }

    return result
}

let tests = new Tests(['3+2*2', 7], [' 3/2 ', 1], [' 3+5 / 2 ', 5])

tests.run(calculate)
