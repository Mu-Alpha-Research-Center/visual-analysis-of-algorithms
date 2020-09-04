// https://leetcode.com/problems/single-number

declare let runTests

function singleNumber(nums: number[]): number {
  let counts: { [key:string]: number } = {}
  for (let n of nums) {
    if (n in counts) {
      counts[n] += 1
    } else {
      counts[n] = 1
    }
  }
  for (let n of nums) {
    if (counts[n] === 1) {
      return n
    }
  }
  return 0
}

runTests(singleNumber, [
  [[1], 1],
  [[1, 0, 1], 0],
  [[2, 2, 1], 1],
  [[4, 1, 2, 1, 2], 4]
])
