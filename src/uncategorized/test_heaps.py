import heapq

from .. import utils


class Solution(utils.BaseSolution):
    def heapmerge(self, *iterables):
        return list(heapq.merge(*iterables))

    def heapsort(self, iterable):
        h = []
        for value in iterable:
            heapq.heappush(h, value)
        return [heapq.heappop(h) for i in range(len(h))]


def test_heapmerge():
    s = Solution()
    tests = [([1], [4, 5], [2, 3], [6], [1, 2, 3, 4, 5, 6])]

    for *iterables, expected in tests:
        assert s.heapmerge(*iterables) == expected, "heapmerge"


def test_heapsort():
    s = Solution()
    tests = [
        ([3, 2, 1], [1, 2, 3]),
    ]

    for nums, expected in tests:
        assert s.heapsort(nums) == expected, "heapsort"
