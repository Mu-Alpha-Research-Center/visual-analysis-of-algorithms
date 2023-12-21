import inspect
import sys


class Complexity:
    def __init__(self):
        self.reset()

    def incr_step(self):
        self._steps += 1

    def get_steps(self):
        return self._steps

    def set_space(self, object):
        self._space = object

    def getsizeof_space(self):
        return sys.getsizeof(self._space)

    def reset(self):
        self._steps = 0
        self._space = None


def get_methods(object):
    members = inspect.getmembers(object, predicate=inspect.ismethod)
    methods = [(name, func) for name, func in members if not name.startswith("_")]

    return methods
