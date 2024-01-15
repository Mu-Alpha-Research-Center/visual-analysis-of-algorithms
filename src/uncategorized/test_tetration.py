from typing import List

from .. import utils


class Solution(utils.BaseSolution):
    def tetration(self, a: int, n: int) -> int:
        self.complexity.step()
        if n == 0:
            return 1
        else:
            return a ** (self.tetration(a, n - 1))


def test_solutions():
    s = Solution()
    tests = [
        (2, 4, 65536),
    ]

    for name, func in s.methods():
        for a, n, expected in tests:
            assert func(a, n) == expected, f"{name}"


def test_complexity():
    s = Solution()
    tests = [(2, n) for n in range(5)]

    for name, func in s.methods():
        for a, n in tests:
            func(a, n)
            s.complexity.mark(name, n)

    s.complexity.plot()
