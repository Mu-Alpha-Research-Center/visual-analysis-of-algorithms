import { runTests } from '../../TestHelpers'

function findMatchingWords(s: string): string[] {
    const canonicalDict = buildCanonicalDict(['kale', 'lake', 'leak'])
    const k = hashCanonicalString(s)
    if (k in canonicalDict) {
        return canonicalDict[k]
    }
    return []
}

function buildCanonicalDict(dict: string[]): Record<string, string[]> {
    const result: Record<string, string[]> = {}
    for (const word of dict) {
        const k = hashCanonicalString(word)
        if (k in result) {
            result[k].push(word)
        } else {
            result[k] = [word]
        }
    }
    return result
}

function hashCanonicalString(s: string): string {
    return s.split('').sort().join('')
}

runTests(findMatchingWords, [
    ['food', []],
    ['aekl', ['kale', 'lake', 'leak']],
])

runTests(buildCanonicalDict, [
    [['kale', 'lake', 'leak'], { aekl: ['kale', 'lake', 'leak'] }],
])

runTests(hashCanonicalString, [
    ['kale', 'aekl'],
    ['lake', 'aekl'],
    ['leak', 'aekl'],
])
