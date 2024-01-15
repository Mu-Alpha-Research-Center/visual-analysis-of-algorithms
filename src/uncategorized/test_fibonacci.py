from functools import cache

from .. import utils


class Solution(utils.BaseSolution):
    def recursive(self, n: int):
        self.complexity.step()
        if n <= 1:
            return n
        return self.recursive(n - 1) + self.recursive(n - 2)

    @cache
    def dynamic_top_down(self, n: int):
        self.complexity.store(cache)
        self.complexity.step()
        if n <= 1:
            return n
        return self.dynamic_top_down(n - 1) + self.dynamic_top_down(n - 2)

    def dynamic_bottom_up(self, n: int):
        prev = 0
        curr = 1
        self.complexity.store(prev, curr)
        if n == 0:
            return n
        for _ in range(n - 1):
            self.complexity.step()
            next = prev + curr
            (curr, prev) = (next, curr)
        return curr


def test_complexity():
    s = Solution()
    tests = range(1, 6)

    for name, func in s.methods():
        for nums in tests:
            func(nums)
            s.complexity.mark(name, nums)

    s.complexity.plot()
