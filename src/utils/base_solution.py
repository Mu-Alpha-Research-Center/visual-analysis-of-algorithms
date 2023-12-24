import inspect
from pathlib import Path

from .complexity import Complexity


class BaseSolution:
    def __init__(self):
        path = Path(inspect.getfile(self.__class__))

        self.complexity = Complexity(path)

    def methods(self):
        members = inspect.getmembers(self, predicate=inspect.ismethod)

        return [
            (name, func)
            for name, func in members
            if name != "methods" and not name.startswith("_")
        ]
