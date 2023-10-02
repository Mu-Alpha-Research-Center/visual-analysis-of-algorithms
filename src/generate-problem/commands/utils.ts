import * as fs from 'fs'

export function writeFile(
    file: string,
    data: string,
    force: boolean = false
): Error {
    if (!force && fs.existsSync(file)) {
        return new Error('File already exists. Set --force to overwrite.')
    }
    try {
        fs.writeFileSync(file, data, 'utf8')
    } catch (error) {
        return error
    }
}
