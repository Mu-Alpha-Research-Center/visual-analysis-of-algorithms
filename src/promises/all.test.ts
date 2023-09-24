import Tests from '../TestHelpers'

async function all<T>(promises: Promise<T>[]) {
    return new Promise((resolve, reject) => {
        const results = []
        let promisesRemaining = promises.length

        for (const promise of promises) {
            promise
                .then((value) => results.push(value))
                .catch((error) => reject(error))
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
        [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
        [1, 2, 3],
    ],
    [[Promise.reject(1), Promise.resolve(2)], 1]
)

tests.run(all)
