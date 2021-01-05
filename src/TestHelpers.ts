import * as prettyFormat from 'pretty-format'

type Test = any[]
type TestFunc = (...args: any[]) => any
type Newable = {
  new(...args: any[]): any
}

export class Tests {
  tests: Test[]

  constructor(...tests: Test) {
    this.tests = tests
  }

  run(...funcs: TestFunc[]): Tests {
    for (let func of funcs) {
      runTests(func, this.tests)
    }
    return this
  }

  runClass(obj: Newable): Tests {
    for (let testArgs of this.tests) {
      let [funcs, funcArgs, expected] = testArgs
      let instance = new obj(...funcArgs[0])
      for (let i = 1; i < funcs.length; i++) {
        let func = funcs[i]
        let args = funcArgs[i]
        test(`${funcs[0]}.${funcs[i]}(${args})`, () =>
          expect(instance[func](...args)).toStrictEqual(expected[i])
        )
      }
    }
    return this
  }
}

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
