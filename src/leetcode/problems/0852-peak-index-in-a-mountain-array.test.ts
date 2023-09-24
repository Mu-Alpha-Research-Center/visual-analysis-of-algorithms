// https://leetcode.com/problems/peak-index-in-a-mountain-array

import Tests from '../../TestHelpers'

function peakIndexInMountainArray1(arr: number[]): number {
    let peak: number = arr[0]
    let peakIndex: number = 0
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i]
        if (num > peak) {
            peak = num
            peakIndex = i
        }
    }
    return peakIndex
}

function peakIndexInMountainArray2(arr: number[]): number {
    let i = 0
    while (arr[i] < arr[i + 1]) {
        i++
    }
    return i
}

let tests = new Tests([[0, 1, 0], 1], [[0, 2, 1, 0], 1])

tests.run(peakIndexInMountainArray1, peakIndexInMountainArray2)
