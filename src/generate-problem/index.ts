import { program } from 'commander'
import { leetCodeCommand, projectEulerCommand } from './commands'

const forceOption: [string, string, boolean] = ['-f', '--force', false]

async function main() {
    program
        .command('leetcode <problem-slug>')
        .description('generate leetcode problem')
        .option(...forceOption)
        .action(leetCodeCommand)

    program
        .command('project-euler <problem-number>')
        .description('generate project euler problem')
        .option(...forceOption)
        .action(projectEulerCommand)

    await program.parseAsync(process.argv)
}

main()
