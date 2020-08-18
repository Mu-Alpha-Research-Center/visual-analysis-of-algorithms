var runningSum = function(nums) {
  var result = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = 0; j < i; j++) {
      let m = nums[j];
      sum += m;
    }
    result.push(sum);
  }

  return result;
};

test('runningSum', () => {
  expect(runningSum([1, 2, 3, 4])).toStrictEqual([1, 3, 6, 10]);
  expect(runningSum([1, 1, 1, 1, 1])).toStrictEqual([1, 2, 3, 4, 5]);
});
