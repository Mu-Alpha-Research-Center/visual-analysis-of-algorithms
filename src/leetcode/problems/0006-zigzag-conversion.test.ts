// https://leetcode.com/problems/zigzag-conversion

import Tests from '../../TestHelpers'

function convert(s: string, numRows: number): string {
    const numCols = numRows - 2
    let i = 0
    let n = numRows
    let t = ''
    let spacer = '-'

    while (i < s.length) {
        const j = i + n
        let substr = ''
        while (i < j && i < s.length) {
            substr += s[i++]
        }
        if (n === numCols) {
            substr = [...(spacer + substr)]
                .reverse()
                .join('')
                .padStart(numRows, spacer)
        }
        t += substr
        n = n === numRows ? numCols : numRows
    }

    let result = ''

    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < t.length; j += numRows) {
            const c = t[j]
            if (c !== spacer) {
                result += c
            }
        }
    }

    return result
}

let tests = new Tests(
    ['PAYPALISHIRING', 3, 'PAHNAPLSIIGYIR'],
    ['PAYPALISHIRING', 4, 'PINALSIGYAHRPI'],
    ['A', 1, 'A'],
    ['ABCDE', 4, 'ABCED']
)

tests.run(convert)
