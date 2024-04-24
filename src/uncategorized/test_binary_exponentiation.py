import math


from .. import utils


class Solution(utils.BaseSolution):
    def logarithmic(self, x: int, n: int):
        self.complexity.step()
        if n == 0:
            return 1
        elif n < 0:
            return self.logarithmic(1 / x, -n)
        elif n % 2 == 0:
            return self.logarithmic(x * x, n / 2)
        else:
            return x * self.logarithmic(x * x, (n - 1) / 2)


def test_solutions():
    s = Solution()
    tests = [
        ([2, 0], 1),
        ([2, 2], 4),
        ([2, 10], 1024),
        ([2, -2], 0.25),
        ([2, -4], 0.0625),
    ]

    for name, func in s.methods():
        for args, expected in tests:
            assert func(*args) == expected, f"{name}"


def test_complexity():
    s = Solution()
    tests = range(1, 10_000)

    for name, func in s.methods():
        for n in tests:
            func(2, n)
            s.complexity.mark(name, n)

    s.complexity.plot()
