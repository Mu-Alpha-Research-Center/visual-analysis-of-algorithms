import numbers
import sys
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import make_interp_spline

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
        assert isinstance(name, str)
        assert isinstance(input_size, numbers.Number)

        self._history.append(
            (self._category_time, name, input_size, self._steps),
        )
        if len(self._objects) > 0:
            self._history.append(
                (
                    self._category_space,
                    name,
                    input_size,
                    sum(sys.getsizeof(o) for o in self._objects),
                ),
            )
        self._steps = 0
        self._objects = []

    def plot(self):
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
        if len(data[self._category_space]) == 0:
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

        if self._path is not None:
            fig.suptitle(self._path.name)

        for category, ax, xlabel, ylabel in subplots:
            for name, values in data[category].items():
                line_props = {
                    "label": name,
                    "linewidth": 0.9,
                }
                x = np.array(values["x"])
                y = np.array(values["y"])
                try:
                    xsmooth = np.linspace(x.min(), x.max())
                    ysmooth = make_interp_spline(x, y)(xsmooth)
                    ax.plot(
                        xsmooth,
                        ysmooth,
                        **line_props,
                    )
                except ValueError:
                    ax.plot(x, y, **line_props)
            ax.set(title=category, xlabel=xlabel, ylabel=ylabel)
            ax.margins(x=0)
            ax.legend()

        fig.tight_layout()

        if self._path is None:
            plt.show()
        else:
            plt.savefig(self._path.with_suffix(".png"), dpi=300)
