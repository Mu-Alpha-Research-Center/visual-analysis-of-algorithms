import { runTests, RunTestsFn } from './lib/TestHelpers'

declare global {
  namespace NodeJS {
    interface Global {
      runTests: RunTestsFn
    }
  }
}

global.runTests = runTests
