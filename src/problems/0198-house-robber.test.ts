// https://leetcode.com/problems/house-robber

import Tests from '../TestHelpers'

function rob(nums: number[]): number {
    // Handle base cases where n <= 2
    if (nums.length === 0) {
        return 0
    } else if (nums.length === 1) {
        return nums[0]
    } else if (nums.length === 2) {
        return Math.max(...nums)
    }

    // This solution requires dynamic programming
    let amounts: number[] = [
        nums[0], // We can only rob the first house
        Math.max(nums[0], nums[1]), // We can rob either the first or second house
    ]

    for (let i = 2; i < nums.length; i++) {
        // Calculating non-adjacent sums and picking the max at each step or of
        // what we've seen so far. The algorithm is exploring the houses,
        // and updating it's knowledge of the max amount as it goes along.
        amounts[i] = Math.max(amounts[i - 2] + nums[i], amounts[i - 1])
    }

    // At the end, we return the last amount
    return amounts[amounts.length - 1]
}

let tests = new Tests(
    [[], 0],
    [[1], 1],
    [[1, 2], 2],
    [[1, 2, 3], 4],
    [[2, 1, 1, 2], 4],
    [[1, 2, 3, 1], 4],
    [[2, 7, 9, 3, 1], 12]
)

tests.run(rob)
