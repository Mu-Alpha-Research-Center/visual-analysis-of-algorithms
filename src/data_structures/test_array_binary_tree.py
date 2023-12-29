class ArrayBinaryTree:
    def __init__(self, array):
        self.array = list(array)

    def index_out_of_range(self, i: int) -> bool:
        return i < 0 or i > len(self.array) - 1

    def get_parent(self, n):
        i = self.array.index(n)
        j = (i - 1) // 2
        if self.index_out_of_range(j):
            return None
        return self.array[j]

    def get_left_child(self, n):
        i = self.array.index(n)
        j = 2 * i + 1
        if self.index_out_of_range(j):
            return None
        return self.array[j]

    def get_right_child(self, n):
        i = self.array.index(n)
        j = 2 * i + 2
        if self.index_out_of_range(j):
            return None
        return self.array[j]


def test_getters():
    #     4
    #    / \
    #   2   5
    #  / \
    # 1   3
    tree = ArrayBinaryTree([4, 2, 5, 1, 3])

    get_parent_tests = [
        (4, None),
        (2, 4),
        (5, 4),
        (1, 2),
        (3, 2),
    ]
    get_left_child_tests = [(4, 2), (2, 1), (1, None), (3, None), (5, None)]
    get_right_child_tests = [(4, 5), (5, None), (2, 3), (3, None), (1, None)]

    for n, expected in get_parent_tests:
        assert tree.get_parent(n) == expected
    for n, expected in get_left_child_tests:
        assert tree.get_left_child(n) == expected
    for n, expected in get_right_child_tests:
        assert tree.get_right_child(n) == expected
