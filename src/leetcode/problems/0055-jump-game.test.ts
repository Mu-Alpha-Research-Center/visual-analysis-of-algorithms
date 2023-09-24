// https://leetcode.com/problems/jump-game

import Tests from '../../TestHelpers'

function* dfs(index: number, nums: number[]): IterableIterator<number> {
    if (index < nums.length) {
        yield index
        for (let jump = 1; jump <= nums[index]; jump++) {
            yield* dfs(index + jump, nums)
        }
    }
}

function canJump1(nums: number[]): boolean {
    let result = false
    for (let index of dfs(0, nums)) {
        if (index === nums.length - 1) {
            result = true
            break
        }
    }
    return result
}

function canJump2(nums: number[]): boolean {
    let lastPos = nums.length - 1
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= lastPos) {
            lastPos = i
        }
    }
    return lastPos == 0
}

let tests = new Tests(
    [[], false],
    [[0], true],
    [[2, 3, 1, 1, 4], true],
    [[3, 2, 1, 0, 4], false]
)

tests.run(canJump2)
