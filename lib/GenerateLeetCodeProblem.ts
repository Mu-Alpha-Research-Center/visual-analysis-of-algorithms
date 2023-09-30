import * as fs from 'fs'
import { program } from 'commander'
import { LeetCode } from 'leetcode-query'

async function main() {
    program
        .argument('<problem-slug>', 'LeetCode problem slug (e.g. two-sum)')
        .option('-f', '--force', false)
        .parse()

    const args = program.args
    const opts = program.opts()
    const problemSlug = args[0]?.trim()
    const leetcode = new LeetCode()
    const problem = await leetcode.problem(problemSlug)

    if (!problem) {
        return program.error(`Invalid problem slug.`)
    }

    const problemId = problem.questionId.padStart(4, '0')
    const file = `src/leetcode/problems/${problemId}-${problemSlug}.test.ts`

    if (!opts.o && fs.existsSync(file)) {
        return program.error(
            'File already exists. Set `-f` or `--force` to overwrite.'
        )
    }

    fs.writeFileSync(file, template(problemSlug), 'utf8')
}

function template(problemSlug: string): string {
    return `// https://leetcode.com/problems/${problemSlug}/description

import Tests from '../../TestHelpers'

function solution(n: number): number {
    return n * n
}

const tests = new Tests(
    [2, 4],
)

tests.run(solution)
`
}

main()
