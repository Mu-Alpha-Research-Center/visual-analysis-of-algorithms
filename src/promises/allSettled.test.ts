import Tests from '../TestHelpers'

async function allSettled<T>(promises: Promise<T>[]) {
    const results = []
    for (const promise of promises) {
        try {
            const value = await promise
            results.push({ status: 'fulfilled', value })
        } catch (reason) {
            results.push({ status: 'rejected', reason })
        }
    }
    return results
}

let tests = new Tests(
    [
        [Promise.resolve(1), Promise.resolve(2)],
        [
            { status: 'fulfilled', value: 1 },
            { status: 'fulfilled', value: 2 },
        ],
    ],
    [
        [Promise.resolve(1), Promise.reject(2)],
        [
            { status: 'fulfilled', value: 1 },
            { status: 'rejected', reason: 2 },
        ],
    ]
)

tests.run(allSettled)
