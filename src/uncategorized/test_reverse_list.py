from typing import List

from .. import utils


class Solution(utils.BaseSolution):
    def copy(self, items: List[int]) -> List[int]:
        result = []
        self.complexity.store(result)
        for i in range(len(items) - 1, -1, -1):
            self.complexity.step()
            result.append(items[i])
        return result

    def in_place(self, items: List[int]) -> List[int]:
        i = 0
        j = len(items) - 1
        self.complexity.store(i, j)
        while i < j:
            self.complexity.step()
            items[i], items[j] = items[j], items[i]
            i += 1
            j -= 1
        return items


def test_solutions():
    s = Solution()
    tests = [
        ([1, 2, 3], [3, 2, 1]),
    ]

    for name, func in s.methods():
        for nums, expected in tests:
            assert func(nums) == expected, f"{name}"


def test_complexity():
    s = Solution()
    tests = [list(range(n)) for n in range(100)]

    for name, func in s.methods():
        for nums in tests:
            func(nums)
            s.complexity.mark(name, len(nums))

    s.complexity.plot()
