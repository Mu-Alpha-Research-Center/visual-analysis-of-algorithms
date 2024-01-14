from functools import cache

from .. import utils


class Solution(utils.BaseSolution):
    def recursive(self, n: int):
        self.complexity.step()
        if n <= 1:
            return n
        return self.recursive(n - 1) + self.recursive(n - 2)

    @cache
    def recursive_cached(self, n: int):
        self.complexity.store(cache)
        self.complexity.step()
        if n <= 1:
            return n
        return self.recursive_cached(n - 1) + self.recursive_cached(n - 2)

    def dynamic_programming(self, n: int):
        previous_previous = 0
        previous = 1
        self.complexity.store(previous_previous, previous)
        if n == 0:
            return n
        for _ in range(n - 1):
            self.complexity.step()
            current = previous_previous + previous
            (previous, previous_previous) = (current, previous)
        return previous


def test_complexity():
    s = Solution()
    tests = range(1, 6)

    for name, func in s.methods():
        for nums in tests:
            func(nums)
            s.complexity.mark(name, nums)

    s.complexity.plot()
