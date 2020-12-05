import * as prettyFormat from 'pretty-format'

type Test = any[] | TodoTest

type TestFunc = (...args: any[]) => any

class TodoTest {
  length: number = 0

  constructor(test: Test) {
    for (let i = 0; i < test.length; i++) {
      this[i] = test[i]
    }
  }
}

export const todo = (test: Test): TodoTest => new TodoTest(test)

export const runTests = (func: TestFunc, tests: Test[]): void => {
  for (let i = 0; i < tests.length; i++) {
    let t = tests[i];
    if (t instanceof TodoTest) {
      test.todo(getTestName(func, t))
      delete tests[i]
    }
  }
  if (tests.length) {
    test.each(tests)(getTestName(func), (...args) => {
      let expected = args.pop()
      expect(func(...args)).toStrictEqual(expected)
    })
  }
}

function getTestName(func: TestFunc, test?: Test): string {
  let testName = func.name + '('
  for (let i = 0; i < func.length; i++) {
    if (test) {
      testName += prettyFormat(test[i])
    } else {
      testName += '%p'
    }
    if (i !== func.length - 1) {
      testName += ', '
    }
  }
  return testName + ')'
}
