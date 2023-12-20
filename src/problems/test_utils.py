import inspect


class Runtime:
    def __init__(self):
        self.reset()

    def step(self):
        self.operations += 1

    def reset(self):
        self.operations = 0


def get_methods(instance):
    methods = inspect.getmembers(instance, predicate=inspect.ismethod)
    return [(name, func) for name, func in methods if not name.startswith("_")]
