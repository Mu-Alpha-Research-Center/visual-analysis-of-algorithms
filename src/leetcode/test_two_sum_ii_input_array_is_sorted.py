# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

from typing import List

from .. import utils


class Solution(utils.BaseSolution):
    def two_pointer(self, nums: List[int], target: int) -> List[int]:
        i = 0
        j = len(nums) - 1
        self.complexity.store(i, j)
        while i < j:
            self.complexity.step()
            s = nums[i] + nums[j]
            if s > target:
                j -= 1
            elif s < target:
                i += 1
            elif s == target:
                return [i + 1, j + 1]
        return []


def test_solutions():
    s = Solution()
    tests = [
        ([2, 7, 11, 15], 9, [1, 2]),
        ([2, 3, 4], 6, [1, 3]),
        ([-1, 0], -1, [1, 2]),
    ]

    for name, func in s.methods():
        for nums, target, expected in tests:
            assert func(nums, target) == expected, f"{name}"


def test_complexity():
    s = Solution()
    tests = [(range(n), -1) for n in range(100)]

    for name, func in s.methods():
        for nums, target in tests:
            func(nums, target)
            s.complexity.mark(name, len(nums))

    s.complexity.plot()
