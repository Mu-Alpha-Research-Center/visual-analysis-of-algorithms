from typing import List
from collections import defaultdict
import matplotlib.pyplot as plt
from pathlib import Path

import test_utils


class Solution:
    def __init__(self):
        self.name = "Two Sum"
        self.runtime = test_utils.Runtime()

    def twoSumBruteForce(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            self.runtime.step()
            n = nums[i]
            for j in range(i + 1, len(nums)):
                self.runtime.step()
                m = nums[j]
                if n + m == target:
                    return [i, j]

    def twoSumTwoPass(self, nums: List[int], target: int) -> List[int]:
        m = {}
        for i, n in enumerate(nums):
            self.runtime.step()
            m[n] = i
        for i, n in enumerate(nums):
            self.runtime.step()
            complement = target - n
            if complement in m and m[complement] != i:
                return [i, m[complement]]

    def twoSumOnePass(self, nums: List[int], target: int) -> List[int]:
        m = {}
        for i, n in enumerate(nums):
            self.runtime.step()
            complement = target - n
            if complement in m:
                return [m[complement], i]
            m[n] = i


def test_solutions():
    tests = [
        ([2, 7, 11, 15], 9, [0, 1]),
        ([3, 2, 4], 6, [1, 2]),
        ([3, 3], 6, [0, 1]),
    ]
    solutions = test_utils.get_methods(Solution())
    for nums, target, expected in tests:
        for name, func in solutions:
            assert func(nums, target) == expected, f"{name}"


def plot_runtime():
    data = {}
    s = Solution()

    for name, func in test_utils.get_methods(s):
        tests = [range(n) for n in range(100)]
        for test in tests:
            func(test, -1)
            if name not in data:
                data[name] = {"x": [], "y": []}
            data[name]["x"].append(len(test))
            data[name]["y"].append(s.runtime.operations)
            s.runtime.reset()

    for name, values in data.items():
        plt.plot(values["x"], values["y"], label=name)

    path = Path(__file__)
    plt.title(f"{s.name} Runtime")
    plt.xlabel("Input Size")
    plt.ylabel("Operations")
    plt.legend()
    plt.savefig(f"src/problems/{path.stem}", dpi=200)


if __name__ == "__main__":
    plot_runtime()
