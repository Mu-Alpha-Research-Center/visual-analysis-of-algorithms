import sys

from .. import utils


class Solution(utils.BaseSolution):
    def one_pass(self, x: int) -> bool:
        r = 0
        n = x
        self.complexity.store(r, n)
        while n > 0:
            self.complexity.step()
            r = r * 10 + (n % 10)
            n //= 10
        return x == r


def test_solutions():
    tests = [
        (0, True),
        (121, True),
        (-121, False),
        (10, False),
    ]
    s = Solution()

    for n, expected in tests:
        for name, func in s.methods():
            assert func(n) == expected, f"{name}"


def test_complexity():
    tests = [-2, 0, 2]
    while len(tests) <= 1000:
        tests.append(tests[-1] << 1)
    s = Solution()

    for n in tests:
        for name, func in s.methods():
            func(n)
            s.complexity.mark(name, sys.getsizeof(n))

    s.complexity.plot()
