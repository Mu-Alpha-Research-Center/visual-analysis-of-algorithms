import math

import numpy as np

from .. import utils


class Solution(utils.BaseSolution):
    _step = 0.1

    def logarithmic(self, n: int):
        for _ in np.arange(0, math.log(n), self._step):
            self.complexity.step()

    def linear(self, n: int):
        for _ in np.arange(0, n, self._step):
            self.complexity.step()

    def quadratic(self, n: int):
        for _ in np.arange(0, n**2, self._step):
            self.complexity.step()

    def exponential(self, n: int):
        for _ in np.arange(0, 2**n, self._step):
            self.complexity.step()


def test_complexity():
    s = Solution()
    tests = range(1, 10)

    for name, func in s.methods():
        for nums in tests:
            func(nums)
            s.complexity.mark(name, nums)

    s.complexity.plot()
