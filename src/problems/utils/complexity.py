import sys
from pathlib import Path

import matplotlib.pyplot as plt

plt.rcParams["font.family"] = "Menlo"


class Complexity:
    _category_time = "time"
    _category_space = "space"

    def __init__(self, path: Path):
        self._path = path
        self._history = []
        self._steps = 0
        self._objects = []

    def step(self):
        self._steps += 1

    def store(self, *objects):
        self._objects += objects

    def mark(self, name, input_size):
        self._history += [
            (self._category_time, name, input_size, self._steps),
            (
                self._category_space,
                name,
                input_size,
                sum(sys.getsizeof(o) for o in self._objects),
            ),
        ]
        self._steps = 0
        self._objects = []

    def plot(self, only_time=False):
        # Aggregate history data
        data = {
            self._category_time: {},
            self._category_space: {},
        }

        for category, name, x, y in self._history:
            if name not in data[category]:
                data[category][name] = {"x": [], "y": []}
            data[category][name]["x"].append(x)
            data[category][name]["y"].append(y)

        # Plot history data
        if only_time:
            fig, ax_time = plt.subplots(1)
            subplots = [
                (self._category_time, ax_time, "input size", "steps"),
            ]
        else:
            fig, axs = plt.subplots(2)
            subplots = [
                (self._category_time, axs[0], "input size", "steps"),
                (self._category_space, axs[1], "input size", "bytes"),
            ]

        fig.suptitle(self._path.name)

        for category, ax, xlabel, ylabel in subplots:
            for name, values in data[category].items():
                ax.plot(values["x"], values["y"], label=name, linewidth=0.9)
            ax.set(title=category, xlabel=xlabel, ylabel=ylabel)
            ax.margins(x=0)
            ax.legend()

        fig.tight_layout()

        plt.savefig(f"src/problems/{self._path.stem}", dpi=300)
