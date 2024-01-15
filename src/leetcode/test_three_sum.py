# https://leetcode.com/problems/3sum/

from typing import List

from .. import utils


class Solution(utils.BaseSolution):
    def brute_force(self, nums: List[int]) -> List[List[int]]:
        triplets = set()
        self.complexity.store(triplets)
        for i, a in enumerate(nums):
            for j, b in enumerate(nums):
                for k, c in enumerate(nums):
                    self.complexity.step()
                    if i != j and i != k and j != k:
                        if a + b + c == 0:
                            triplets.add(tuple(sorted([a, b, c])))
        return [list(t) for t in triplets]


def test_solutions():
    s = Solution()
    tests = [
        ([-1, 0, 1, 2, -1, -4], [[-1, 0, 1], [-1, -1, 2]]),
        ([0, 1, 1], []),
        ([0, 0, 0], [[0, 0, 0]]),
    ]

    for name, func in s.methods():
        for nums, expected in tests:
            assert func(nums) == expected, f"{name}"


def test_complexity():
    s = Solution()
    tests = [range(n) for n in range(10)]

    for name, func in s.methods():
        for nums in tests:
            func(nums)
            s.complexity.mark(name, len(nums))

    s.complexity.plot()
