import Tests from '../TestHelpers'

async function all<T>(promises: Promise<T>[]) {
    const results = []
    for await (const result of promises) {
        results.push(result)
    }
    return results
}

let tests = new Tests(
    [
        [Promise.resolve(1), Promise.resolve(2)],
        [1, 2],
    ],
    [[Promise.reject(1), Promise.resolve(2)], 1]
)

tests.run(all)
