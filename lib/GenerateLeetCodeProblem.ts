import * as fs from 'fs'
import { program } from 'commander'

program
    .name('yarn generate:leetcode-problem')
    .argument('<problem-number>', 'LeetCode problem number')
    .argument('<problem-name>', 'LeetCode problem name')
    .option('-o', '--overwrite', false)

function template(name: string): string {
    return `// https://leetcode.com/problems/${name}

import Tests from '../TestHelpers'

function solution(n: number): number {
    return n * n
}

let tests = new Tests(
    [2, 4],
)

tests.run(solution)
`
}

function main() {
    program.parse()

    const args = program.args
    const opts = program.opts()

    let num = parseInt(args[0], 10)
    if (isNaN(num)) {
        return program.error('error: first argument must be an integer')
    }

    let name = args[1]
    let numPadded = num.toString().padStart(4, '0')
    let file = `src/problems/${numPadded}-${name}.test.ts`

    if (!opts.o) {
        if (fs.existsSync(file)) {
            return program.error(
                'error: file already exists. pass -o to overwrite'
            )
        }
    }

    fs.writeFileSync(file, template(name), 'utf8')
}

main()
