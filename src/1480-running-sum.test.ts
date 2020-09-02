// https://leetcode.com/problems/running-sum-of-1d-array/

function runningSum(nums: number[]): number[] {
  var result = []
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i]
    for (let j = 0; j < i; j++) {
      sum += nums[j];
    }
    result.push(sum)
  }
  return result
};

let testEach = test.each([
  [[1, 2, 3, 4], [1, 3, 6, 10]],
  [[1, 1, 1, 1, 1], [1, 2, 3, 4, 5]]
])

testEach('runningSum(%p)', (a, expected) => {
  expect(runningSum(a)).toStrictEqual(expected)
})
