import * as fs from 'fs'

function template(name) {
  return `// https://leetcode.com/problems/${name}

import { Tests } from '../TestHelpers'

function solution(n: number): number {
  return n
}

let tests = new Tests(
  [0, 0]
)

tests.run(solution)`
}

function main() {
  let args = process.argv.slice(2)
  if (args.length < 2) {
    return
  }

  let num = parseInt(args[0], 10)
  if (isNaN(num)) {
    return
  }

  let name = args[1]
  let numStr = num.toString().padStart(4, '0')

  let file = `src/Solutions/${numStr}-${name}.test.ts`
  let data = template(name)

  if (fs.existsSync(file)) {
    return
  }

  fs.writeFileSync(file, data, 'utf8')
}

main()
