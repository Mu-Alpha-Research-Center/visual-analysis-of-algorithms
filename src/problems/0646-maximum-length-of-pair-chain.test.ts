// https://leetcode.com/problems/maximum-length-of-pair-chain

import Tests from '../TestHelpers'

function findLongestChain(pairs: number[][]): number {
    let dp = Array(pairs.length).fill(1)
    pairs.sort(([a, b], [c, d]) => a - c)
    for (let j = 1; j < pairs.length; j++) {
        for (let i = 0; i < j; i++) {
            if (pairs[i][1] < pairs[j][0]) {
                dp[j] = Math.max(dp[j], dp[i] + 1)
            }
        }
    }
    let max = 0
    for (let n of dp) {
        if (n > max) max = n
    }
    return max
}

let tests = new Tests(
    [
        [
            [1, 2],
            [3, 4],
            [2, 3],
        ],
        2,
    ],
    [
        [
            [-10, -8],
            [8, 9],
            [-5, 0],
            [6, 10],
            [-6, -4],
            [1, 7],
            [9, 10],
            [-4, 7],
        ],
        4,
    ],
    [
        [
            [7, 9],
            [4, 5],
            [7, 9],
            [-7, -1],
            [0, 10],
            [3, 10],
            [3, 6],
            [2, 3],
        ],
        4,
    ],
    [
        [
            [5, 9],
            [-1, 8],
            [-6, -2],
            [8, 9],
            [4, 8],
            [3, 6],
            [2, 6],
            [5, 9],
            [-1, 6],
            [-8, -7],
        ],
        4,
    ]
)

tests.run(findLongestChain)
