// https://leetcode.com/problems/robot-return-to-origin

import Tests from '../../TestHelpers'

function judgeCircle(moves: string): boolean {
    let pos = {
        x: 0,
        y: 0,
    }
    for (let move of moves) {
        if (move === 'U') {
            pos.y++
        } else if (move === 'D') {
            pos.y--
        } else if (move === 'R') {
            pos.x++
        } else if (move === 'L') {
            pos.x--
        }
    }
    // The time complexity is order of n.
    // The space complexity is order of 1.
    return pos.x === 0 && pos.y === 0
}

let tests = new Tests(
    ['UD', true],
    ['LL', false],
    ['RRDD', false],
    ['LDRRLRUULR', false]
)

tests.run(judgeCircle)
