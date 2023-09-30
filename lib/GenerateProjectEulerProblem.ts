import * as fs from 'fs'
import { program } from 'commander'
import { load } from 'cheerio'

async function main() {
    program
        .argument('<problem-number>', 'Project Euler problem number')
        .option('-f', '--force', false)
        .parse()

    const args = program.args
    const opts = program.opts()
    const problemNumber = parseInt(args[0], 10)
    if (isNaN(problemNumber)) {
        return program.error('Problem number not a number.')
    }
    const problemNumberPadded = problemNumber.toString().padStart(4, '0')

    const file = `src/project-euler/problems/${problemNumberPadded}.test.ts`

    if (!opts.f && fs.existsSync(file)) {
        return program.error(
            'File already exists. Set `-f` or `--force` to overwrite.'
        )
    }

    const res = await fetch(`https://projecteuler.net/minimal=${problemNumber}`)
    const html = await res.text()
    const problemText = parseProblemText(html)

    fs.writeFileSync(file, template(problemNumber, problemText), 'utf8')
}

function parseProblemText(html: string): string {
    let problemText = ''
    const $ = load(html)
    const lines = $('p')
    for (const line of lines) {
        let lineText = $(line).text().replace(/\$/g, '')
        problemText += `// ${lineText}\n`
    }
    return problemText
}

function template(problemNumber: number, problemText: string): string {
    return `// https://projecteuler.net/problem=${problemNumber}
//
${problemText}
import Tests from '../../TestHelpers'

function solution(n: number): number {
    return n * n
}

const tests = new Tests([2, 4])

tests.run(solution)
`
}

main()
