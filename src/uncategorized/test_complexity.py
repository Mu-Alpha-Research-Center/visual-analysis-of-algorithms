import math

from .. import utils


class Solution(utils.BaseSolution):
    def constant(self, n: int):
        pass

    def logarithmic(self, n: int):
        for _ in utils.strange(math.log(n)):
            self.complexity.step()

    def linear(self, n: int):
        for _ in utils.strange(n):
            self.complexity.step()

    def quadratic(self, n: int):
        for _ in utils.strange(n**2):
            self.complexity.step()

    def exponential(self, n: int):
        for _ in utils.strange(2**n):
            self.complexity.step()


def test_complexity():
    tests = range(1, 10)
    s = Solution()

    for nums in tests:
        for name, func in s.methods():
            func(nums)
            s.complexity.mark(name, nums)

    s.complexity.plot()
