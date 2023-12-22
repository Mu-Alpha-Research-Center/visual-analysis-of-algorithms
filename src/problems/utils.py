import inspect
import sys
from pathlib import Path

import matplotlib.pyplot as plt

plt.rcParams["font.family"] = "Menlo"


class Solution:
    def __init__(self):
        self.complexity = Complexity(self)

    def methods(self):
        members = inspect.getmembers(self, predicate=inspect.ismethod)
        methods = [
            (name, func)
            for name, func in members
            if name != "methods" and not name.startswith("_")
        ]

        return methods


class Complexity:
    def __init__(self, solution):
        self.solution = solution
        self.solution_path = Path(inspect.getfile(solution.__class__))
        self.history = []
        self._steps = 0
        self._objects = []

    def step(self):
        self._steps += 1

    def get_steps(self):
        return self._steps

    def space(self, *objects):
        self._objects = objects

    def get_space(self):
        total = 0
        for o in self._objects:
            total += sys.getsizeof(o)
        return total

    def reset(self):
        self._steps = 0
        self._objects = []

    def record(self, name, n):
        self.history += [
            ("time", name, n, self.get_steps()),
            ("space", name, n, self.get_space()),
        ]
        self.reset()

    def aggregate_history(self):
        data = {}

        for category, name, x, y in self.history:
            if category not in data:
                data[category] = {}
            if name not in data[category]:
                data[category][name] = {"x": [], "y": []}
            data[category][name]["x"].append(x)
            data[category][name]["y"].append(y)

        return data

    def plot(self):
        data = self.aggregate_history()
        xlabel = "Input Size"
        linewidth = 0.9
        margins_x = 0

        fig, [time, space] = plt.subplots(2)
        fig.suptitle(self.solution_path.name)

        time.margins(x=margins_x)
        space.margins(x=margins_x)

        for name, values in data["time"].items():
            time.plot(values["x"], values["y"], label=name, linewidth=linewidth)
        time.set(title="Time", xlabel=xlabel, ylabel="Steps")
        time.legend()

        for name, values in data["space"].items():
            space.plot(values["x"], values["y"], label=name, linewidth=linewidth)
        space.set(title="Space", xlabel=xlabel, ylabel="Bytes")
        space.legend()

        fig.tight_layout()
        plt.savefig(f"src/problems/{self.solution_path.stem}", dpi=300)
