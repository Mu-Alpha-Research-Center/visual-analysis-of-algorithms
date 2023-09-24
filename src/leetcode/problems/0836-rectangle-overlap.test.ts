// https://leetcode.com/problems/rectangle-overlap

import Tests from '../../TestHelpers'

interface IPoint {
    x: number
    y: number
}

function isRectangleOverlap1(rec1: number[], rec2: number[]): boolean {
    let rec1_bl: IPoint = { x: rec1[0], y: rec1[1] }
    let rec1_tr: IPoint = { x: rec1[2], y: rec1[3] }
    let rec2_bl: IPoint = { x: rec2[0], y: rec2[1] }
    let rec2_tr: IPoint = { x: rec2[2], y: rec2[3] }

    let rec1_isLine = rec1_bl.x == rec1_tr.x || rec1_bl.y == rec1_tr.y
    let rec2_isLine = rec2_bl.x == rec2_tr.x || rec2_bl.y == rec2_tr.y

    if (rec1_isLine || rec2_isLine) {
        return false
    }

    let rec1_isAbove = rec1_bl.y >= rec2_tr.y
    let rec1_isBelow = rec1_tr.y <= rec2_bl.y
    let rec1_isLeft = rec1_tr.x <= rec2_bl.x
    let rec1_isRight = rec1_bl.x >= rec2_tr.x

    return !(rec1_isAbove || rec1_isBelow || rec1_isLeft || rec1_isRight)
}

function isRectangleOverlap2(rec1: number[], rec2: number[]): boolean {
    let rec1_bl: IPoint = { x: rec1[0], y: rec1[1] }
    let rec1_tr: IPoint = { x: rec1[2], y: rec1[3] }
    let rec2_bl: IPoint = { x: rec2[0], y: rec2[1] }
    let rec2_tr: IPoint = { x: rec2[2], y: rec2[3] }

    return (
        Math.min(rec1_tr.x, rec2_tr.x) > Math.max(rec1_bl.x, rec2_bl.x) &&
        Math.min(rec1_tr.y, rec2_tr.y) > Math.max(rec1_bl.y, rec2_bl.y)
    )
}

let tests = new Tests(
    [[0, 0, 2, 2], [1, 1, 3, 3], true],
    [[0, 0, 1, 1], [1, 0, 2, 1], false],
    [[0, 0, 1, 1], [2, 2, 3, 3], false],
    [[7, 8, 13, 15], [10, 8, 12, 20], true]
)

tests.run(isRectangleOverlap1, isRectangleOverlap2)
