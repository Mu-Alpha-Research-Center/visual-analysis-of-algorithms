import * as prettyFormat from 'pretty-format'

type Newable = {
  new(...args: any[]): any
}

export class Tests {
  tests: any[]

  constructor(...tests: any[]) {
    this.tests = tests
  }

  run(...funcs: Function[]): void {
    for (let func of funcs) this.runFunc(func)
  }

  runFunc(func: Function): void {
    for (let i = 0; i < this.tests.length; i++) {
      let t = this.tests[i];
      if (t[t.length - 1] !== 'todo') continue
      test.todo(this.getTestName(func, t))
      delete this.tests[i]
    }
    if (this.tests.length === 0) return
    test.each(this.tests)(this.getTestName(func), (...args) => {
      let [ok, error] = this.isValid(args)
      if (ok) {
        expect(func(...args)).toStrictEqual(args.pop())
      } else {
        throw(error)
      }
    })
  }

  runClass(obj: Newable): void {
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
  }

  getTestName(func: Function, test?: any[]): string {
    let testName = `${func.name}(`
    for (let i = 0; i < func.length; i++) {
      testName += test ? prettyFormat(test[i]) : '%p'
      if (i < func.length - 1) {
        testName += ', '
      }
    }
    return `${testName})`
  }

  isValid(test: any[]): [boolean, string] {
    let ok:boolean = true
    let error:string = ''
    if (test.length === 0) {
      ok = false
      error = 'Error: Test is empty: [].'
    } else if (test.length === 1) {
      test.push('?')
      ok = false
      error = `Error: Test missing expected return value: [${test}].`
    }
    return [ok, error]
  }
}

export function runTests(func: Function, tests: any[]): void {
  new Tests(...tests).run(func)
}
