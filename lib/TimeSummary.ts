import * as readline from 'readline'
import Time from './Time'

const lines: string[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })
  .on('line', (line: string) => lines.push(line))
  .on('close', () => {
    let completed: Time = Time.fromString(lines[lines.length - 2].trim())
    let remaining: Time = Time.fromString('200:00:00').subtract(completed)

    console.log(`| ${completed} | ${remaining} |`)
  })
