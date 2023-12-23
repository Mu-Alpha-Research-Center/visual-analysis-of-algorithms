import numpy as np
import utils


def frange(n):
    return np.arange(0, n, 0.1)


class Solution(utils.BaseSolution):
    def constant(self, n: int):
        pass

    def logarithmic(self, n: int):
        for _ in frange(np.log(n)):
            self.complexity.step()

    def linear(self, n: int):
        for _ in frange(n):
            self.complexity.step()

    def quadratic(self, n: int):
        for _ in frange(n**2):
            self.complexity.step()

    def exponential(self, n: int):
        for _ in frange(2**n):
            self.complexity.step()


def test_complexity():
    tests = range(1, 10)
    s = Solution()

    for n, func in s.methods():
        for nums in tests:
            func(nums)
            s.complexity.mark(n, nums)

    s.complexity.plot(only_time=True)
