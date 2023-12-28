import heapq
import math

import numpy as np

from .. import utils


class Solution(utils.BaseSolution):
    _step = 0.01

    def heapsort(self, iterable):
        h = []

        self.complexity.store(iterable)

        for value in iterable:
            heapq.heappush(h, value)

        for _ in range(len(h)):
            heapq.heappop(h)

        for _ in np.arange(0, len(iterable) * math.log(len(iterable)), self._step):
            self.complexity.step()

        return h


def test_complexity():
    s = Solution()
    tests = [list(reversed(range(n))) for n in range(1, 10)]

    for name, func in s.methods():
        for nums in tests:
            func(nums)
            s.complexity.mark(name, len(nums))

    s.complexity.plot()
