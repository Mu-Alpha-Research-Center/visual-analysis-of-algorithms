import sys

import utils


class Solution(utils.Solution):
    def two_pass(self, x: int) -> bool:
        digits = []
        self.complexity.space(digits)

        if x < 0:
            self.complexity.step()
            return False

        if x < 10:
            self.complexity.step()
            return True

        while x > 0:
            self.complexity.step()
            digits.append(x % 10)
            x = x // 10

        i = 0
        j = len(digits) - 1
        while i != j:
            self.complexity.step()
            n = digits[i]
            m = digits[j]
            if n != m:
                return False
            i += 1
            j -= 1

        return True


def test_solutions():
    tests = [
        (0, True),
        (121, True),
        (-121, False),
        (10, False),
    ]
    s = Solution()

    for name, func in s.methods():
        for x, expected in tests:
            assert func(x) == expected, f"{name}"


def test_complexity():
    tests = [-2, 0, 2]
    while len(tests) <= 1000:
        tests.append(tests[-1] << 1)
    s = Solution()

    for name, func in s.methods():
        for n in tests:
            func(n)
            s.complexity.record(name, sys.getsizeof(n))

    s.complexity.plot()
