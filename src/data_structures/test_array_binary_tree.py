class ArrayBinaryTree:
    def __init__(self, array):
        self.array = list(array)

    def index_out_of_range(self, i: int) -> bool:
        return i < 0 or i > len(self.array) - 1

    def parent(self, n):
        i = self.array.index(n)
        j = (i - 1) // 2
        if self.index_out_of_range(j):
            return None
        return self.array[j]

    def left_child(self, n):
        i = self.array.index(n)
        j = 2 * i + 1
        if self.index_out_of_range(j):
            return None
        return self.array[j]

    def right_child(self, n):
        i = self.array.index(n)
        j = 2 * i + 2
        if self.index_out_of_range(j):
            return None
        return self.array[j]

    def insert(self, n):
        self.array.append(n)

    def delete(self, n):
        i = self.array.index(n)
        del self.array[i]


def test_insert():
    tree = ArrayBinaryTree([1, 2, 3])
    tree.insert(4)
    assert tree.array == [1, 2, 3, 4]


def test_delete():
    tree = ArrayBinaryTree([1, 2, 3])
    tree.delete(1)
    assert tree.array == [2, 3]


def test_getters():
    #     4
    #    / \
    #   2   5
    #  / \
    # 1   3
    tree = ArrayBinaryTree([4, 2, 5, 1, 3])

    parent_tests = [
        (4, None),
        (2, 4),
        (5, 4),
        (1, 2),
        (3, 2),
    ]
    left_child_tests = [(4, 2), (2, 1), (1, None), (3, None), (5, None)]
    right_child_tests = [(4, 5), (5, None), (2, 3), (3, None), (1, None)]

    for n, expected in parent_tests:
        assert tree.parent(n) == expected
    for n, expected in left_child_tests:
        assert tree.left_child(n) == expected
    for n, expected in right_child_tests:
        assert tree.right_child(n) == expected
