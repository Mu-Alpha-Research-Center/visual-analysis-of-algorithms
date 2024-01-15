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
        prev_fib = 0
        curr_fib = 1
        self.complexity.store(prev_fib, curr_fib)
        if n <= 1:
            return n
        for _ in range(n - 1):
            self.complexity.step()
            next_fib = prev_fib + curr_fib
            prev_fib = curr_fib
            curr_fib = next_fib
        return curr_fib


def test_solutions():
    s = Solution()
    fib_seq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

    for name, func in s.methods():
        for n, expected in enumerate(fib_seq):
            assert func(n) == expected, f"{name}"


def test_complexity():
    s = Solution()
    tests = range(1, 6)

    for name, func in s.methods():
        for nums in tests:
            func(nums)
            s.complexity.mark(name, nums)

    s.complexity.plot()
