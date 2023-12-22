import utils


class Solution(utils.Solution):
    def copy(self, items):
        result = []
        self.complexity.space(result)
        for i in range(len(items) - 1, -1, -1):
            self.complexity.step()
            result.append(items[i])
        return result

    def in_place(self, items):
        i = 0
        j = len(items) - 1
        self.complexity.space(i, j)
        while i < j:
            self.complexity.step()
            items[i], items[j] = items[j], items[i]
            i += 1
            j -= 1
        return items


def test_solutions():
    tests = [
        ([1, 2, 3], [3, 2, 1]),
    ]
    s = Solution()

    for name, func in s.methods():
        for x, expected in tests:
            assert func(x) == expected, f"{name}"


def test_complexity():
    tests = [list(range(n)) for n in range(100)]
    s = Solution()

    for name, func in s.methods():
        for nums in tests:
            func(nums)
            s.complexity.record(name, len(nums))

    s.complexity.plot()
