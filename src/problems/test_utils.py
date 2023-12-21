import inspect
import sys


class Runtime:
    def __init__(self):
        self.reset()

    def step(self):
        self.operations += 1

    def reset(self):
        self.operations = 0


class Space:
    def __init__(self):
        self.reset()

    def watch(self, object):
        self.object = object

    def size(self):
        return sys.getsizeof(self.object)

    def reset(self):
        self.object = None


def get_methods(object):
    members = inspect.getmembers(object, predicate=inspect.ismethod)
    methods = [(name, func) for name, func in members if not name.startswith("_")]

    return methods
