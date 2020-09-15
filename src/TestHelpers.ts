import * as prettyFormat from 'pretty-format'

type TestableFunction = (...args: any[]) => any

export const runTests = (func: TestableFunction, tests: any[][]): void => {
  tests.forEach((t, i) => {
    if (!isTodo(t)) return
    test.todo(getTestName(func, t))
    delete tests[i]
  })
  if (!tests.length) return
  test.each(tests)(getTestName(func), (...args) => {
    let expected = args.pop()
    expect(func(...args)).toStrictEqual(expected)
  })
}

function isTodo(t: any[]): boolean {
  return t[t.length - 1] === 'todo'
}

function getTestName(func: TestableFunction, args: any[] = null): string {
  let testName = func.name
  testName += '('
  for (let i = 0; i < func.length; i++) {
    if (args) {
      testName += prettyFormat(args[i])
    } else {
      testName += '%p'
    }
    if (i !== func.length - 1) testName += ', '
  }
  testName += ')'
  return testName
}
