import { program } from 'commander'
import { LeetCode } from 'leetcode-query'
import { writeFile } from './utils'

export async function leetCodeCommand(
    problemSlug: string,
    opts: Record<string, any>
) {
    const { file, data } = await generateLeetCodeProblem(problemSlug)
    const err = writeFile(file, data, opts.f)
    if (err) {
        this.error(err)
    }
}

async function generateLeetCodeProblem(problemSlug: string) {
    const leetcode = new LeetCode()
    const problem = await leetcode.problem(problemSlug)
    if (!problem) {
        return program.error(`Invalid problem slug.`)
    }
    const problemId = problem.questionId.padStart(4, '0')
    const file = `src/leetcode/problems/${problemId}-${problemSlug}.test.ts`
    const data = template(problemSlug)

    return { file, data }
}

function template(problemSlug: string): string {
    return `// https://leetcode.com/problems/${problemSlug}/description

import Tests from '../../TestHelpers'

function solution(n: number): number {
    return n * n
}

const tests = new Tests([2, 4])

tests.run(solution)
`
}
