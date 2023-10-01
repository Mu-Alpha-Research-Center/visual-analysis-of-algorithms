import { program } from 'commander'
import { leetCodeCommand, projectEulerCommand } from './commands'

async function main() {
    program
        .command('leetcode <problem-slug>')
        .description('generate leetcode problem')
        .option('-f', '--force', false)
        .action(leetCodeCommand)

    program
        .command('project-euler <problem-number>')
        .description('generate project euler problem')
        .option('-f', '--force', false)
        .action(projectEulerCommand)

    await program.parseAsync(process.argv)
}

main()
