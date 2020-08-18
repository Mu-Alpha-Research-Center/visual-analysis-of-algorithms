// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      let m = nums[j]
      if (n + m === target) {
        return [i, j]
      }
    }
  }
  return []
}

test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
  expect(twoSum([2, 7, 11, 15], 8)).toStrictEqual([])
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
})
