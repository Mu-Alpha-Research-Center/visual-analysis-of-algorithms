from typing import List
from collections import defaultdict
import matplotlib.pyplot as plt
from pathlib import Path

import test_utils


class Solution:
    def __init__(self):
        self.complexity = test_utils.Complexity()

    def brute_force(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            self.complexity.incr_step()
            n = nums[i]
            for j in range(i + 1, len(nums)):
                self.complexity.incr_step()
                m = nums[j]
                if n + m == target:
                    return [i, j]

    def one_pass(self, nums: List[int], target: int) -> List[int]:
        m = {}
        self.complexity.set_space(m)
        for i, n in enumerate(nums):
            self.complexity.incr_step()
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


def plot_complexity():
    data = {
        "runtime": {},
        "space": {},
    }
    s = Solution()

    for name, func in test_utils.get_methods(s):
        tests = [range(n) for n in range(100)]
        for test in tests:
            n = len(test)
            func(test, -1)
            if name not in data["runtime"]:
                data["runtime"][name] = {"x": [], "y": []}
            if name not in data["space"]:
                data["space"][name] = {"x": [], "y": []}
            data["runtime"][name]["x"].append(n)
            data["runtime"][name]["y"].append(s.complexity.get_steps())
            data["space"][name]["x"].append(n)
            data["space"][name]["y"].append(s.complexity.getsizeof_space())
            s.complexity.reset()

    fig, [runtime, space] = plt.subplots(2)
    fig.suptitle("Two Sum")

    for name, values in data["runtime"].items():
        runtime.plot(values["x"], values["y"], label=name)
    runtime.set(title="Runtime", xlabel="Input Size", ylabel="Steps")
    runtime.legend()

    for name, values in data["space"].items():
        space.plot(values["x"], values["y"], label=name)
    space.set(title="Space", xlabel="Input Size", ylabel="Bytes")
    space.legend()

    fig.tight_layout()

    path = Path(__file__)
    plt.savefig(f"src/problems/{path.stem}", dpi=200)


if __name__ == "__main__":
    plot_complexity()
