// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero

function numberOfSteps(num: number): number {
  let steps = 0
  while (num > 0) {
    if (num % 2 === 0) {
      num >>= 1
    } else {
      num ^= 1
    }
    steps++
  }
  return steps
}

let testEach = test.each([
  [14, 6],
  [8, 4],
  [123, 12],
])

testEach('numberOfSteps(%p)', (a, expected) => expect(numberOfSteps(a)).toEqual(expected))
