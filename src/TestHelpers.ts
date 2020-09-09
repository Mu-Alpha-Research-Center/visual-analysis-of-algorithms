import * as prettyFormat from 'pretty-format'

type TestableFunction = (...args: any[]) => any

export const runTests = (func: TestableFunction, tests: any[]): void => {
  let todos = tests.filter(t => isTodo(t)),
      notTodos = tests.filter(t => !isTodo(t))

  tests.filter(isTodo).forEach(t => test.todo(getTestName(func, t.slice(0, -1))))

  if (notTodos.length === 0) return

  test.each(notTodos)(getTestName(func), (...args) => {
    expect(func(...args)).toStrictEqual(args.pop())
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
