export type TestableFn = (...args: any[]) => any
export type RunTestsFn = (func: TestableFn, tests: any[]) => void

export const runTests: RunTestsFn = (func, tests) => {
  let testEach = test.each(tests),
      testName = func.name

  testName += '('
  for (let i = 0; i < func.length; i++) {
    testName += '%p'
    if (i !== func.length - 1) testName += ', '
  }
  testName += ')'

  testEach(testName, function() {
    let args: any[] = Array.from(arguments),
        expected: any = args.pop()

    expect(func(...args)).toStrictEqual(expected)
  })
}
