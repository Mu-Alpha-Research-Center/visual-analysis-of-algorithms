from typing import List

from .. import utils


class Solution(utils.BaseSolution):
    def brute_force(self, nums: List[int], target: int) -> List[int]:
        for i, n in enumerate(nums):
            for j in range(i + 1, len(nums)):
                self.complexity.step()
                if nums[j] == target - n:
                    return [i, j]
        return []

    def one_pass(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        self.complexity.store(hashmap)
        for i, n in enumerate(nums):
            self.complexity.step()
            complement = target - n
            if complement in hashmap:
                return [hashmap[complement], i]
            hashmap[n] = i
        return []


def test_solutions():
    s = Solution()
    tests = [
        ([2, 7, 11, 15], 9, [0, 1]),
        ([3, 2, 4], 6, [1, 2]),
        ([3, 3], 6, [0, 1]),
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
