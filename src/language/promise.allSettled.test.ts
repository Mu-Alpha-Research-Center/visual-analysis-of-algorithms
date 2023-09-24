import Tests from '../TestHelpers'

async function allSettled<T>(promises: Promise<T>[]): Promise<T[]> {
    return new Promise((resolve) => {
        const results = []
        let promisesRemaining = promises.length

        for (const promise of promises) {
            promise
                .then((value) => results.push({ status: 'fulfilled', value }))
                .catch((error) =>
                    results.push({ status: 'rejected', reason: error })
                )
                .finally(() => {
                    promisesRemaining--
                    if (promisesRemaining === 0) {
                        resolve(results)
                    }
                })
        }
    })
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
