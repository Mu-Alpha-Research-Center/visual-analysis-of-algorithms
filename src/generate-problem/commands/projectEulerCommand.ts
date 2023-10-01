import { load } from 'cheerio'
import { writeFile } from './utils'

export async function projectEulerCommand(
    problemNumber: string,
    opts: Record<string, any>
) {
    const { file, data } = await generateProjectEulerProblem(problemNumber)
    const err = writeFile(file, data, opts.f)
    if (err) {
        this.error(err)
    }
}

async function generateProjectEulerProblem(problemNumber: string) {
    const problemNumberPadded = problemNumber.toString().padStart(4, '0')
    const res = await fetch(`https://projecteuler.net/minimal=${problemNumber}`)
    const problemHTML = await res.text()
    const file = `src/project-euler/problems/${problemNumberPadded}.test.ts`
    const data = template(problemNumber, problemHTML)

    return { file, data }
}

function template(problemNumber: string, problemHTML: string): string {
    return `// https://projecteuler.net/problem=${problemNumber}
//
${parseProblemHTML(problemHTML)}
import Tests from '../../TestHelpers'

function solution(n: number): number {
    return n * n
}

const tests = new Tests([2, 4])

tests.run(solution)
`
}

function parseProblemHTML(html: string): string {
    let problemText = ''
    const $ = load(html)
    const lines = $('p')
    for (const line of lines) {
        let lineText = $(line).text().replace(/\$/g, '')
        problemText += `// ${lineText}\n`
    }
    return problemText
}
