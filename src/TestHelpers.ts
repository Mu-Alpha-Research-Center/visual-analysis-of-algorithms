import * as prettyFormat from 'pretty-format'

type Test = any[]
type TestFunc = (...args: any[]) => any

export const runTests = (func: TestFunc, tests: Test[]): void => {
  for (let i = 0; i < tests.length; i++) {
    let t = tests[i];
    if (t[t.length - 1] === 'todo') {
      test.todo(getTestName(func, t))
      delete tests[i]
    }
  }
  if (tests.length) {
    test.each(tests)(getTestName(func), (...args) => {
      if (args.length === 0) {
        throw `Error: Test is empty: [].`
      } else if (args.length === 1) {
        args.push('?')
        throw `Error: Test missing expected return value: [${args}].`
      }
      let expected = args.pop()
      expect(func(...args)).toStrictEqual(expected)
    })
  }
}

function getTestName(func: TestFunc, test?: Test): string {
  let testName = `${func.name}(`
  for (let i = 0; i < func.length; i++) {
    testName += test ? prettyFormat(test[i]) : '%p'
    if (i < func.length - 1) {
      testName += ', '
    }
  }
  return `${testName})`
}
