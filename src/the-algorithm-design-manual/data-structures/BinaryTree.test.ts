enum BinaryTreeTraverseOrder {
    PreOrder = 1,
    InOrder,
    PostOrder,
}

interface IBinaryTree<T> {
    search(item: T): IBinaryTree<T> | null
    traverse(
        order: BinaryTreeTraverseOrder,
        visit: (tree: BinaryTree<T>) => void
    ): void
}

class BinaryTree<T> implements IBinaryTree<T> {
    constructor(
        public item: T,
        public left?: BinaryTree<T>,
        public right?: BinaryTree<T>
    ) {}

    public search(item: T): BinaryTree<T> | null {
        if (this === null) {
            return null
        }

        if (this.item === item) {
            return this
        }

        if (item < this.item) {
            return this.left.search(item)
        } else {
            return this.right.search(item)
        }
    }

    traverse(
        order: BinaryTreeTraverseOrder,
        visit: (tree: BinaryTree<T>) => void
    ): void {
        if (this === null) {
            return
        }

        switch (order) {
            case BinaryTreeTraverseOrder.PreOrder:
                visit(this)
                this.left?.traverse(order, visit)
                this.right?.traverse(order, visit)
                break
            case BinaryTreeTraverseOrder.InOrder:
                this.left?.traverse(order, visit)
                visit(this)
                this.right?.traverse(order, visit)
                break
            case BinaryTreeTraverseOrder.PostOrder:
                this.left?.traverse(order, visit)
                this.right?.traverse(order, visit)
                visit(this)
                break
        }
    }
}

const mockTree = () => new BinaryTree(1, new BinaryTree(2), new BinaryTree(3))

test('search', () => {
    const tree = mockTree()
    const node = tree.search(3)

    expect(node).toEqual({ item: 3 })
})

test('traverse pre-order', () => {
    const tree = mockTree()
    const items = []

    tree.traverse(BinaryTreeTraverseOrder.PreOrder, ({ item }) => {
        items.push(item)
    })

    expect(items).toEqual([1, 2, 3])
})

test('traverse in-order', () => {
    const tree = mockTree()
    const items = []

    tree.traverse(BinaryTreeTraverseOrder.InOrder, ({ item }) => {
        items.push(item)
    })

    expect(items).toEqual([2, 1, 3])
})

test('traverse post-order', () => {
    const tree = mockTree()
    const items = []

    tree.traverse(BinaryTreeTraverseOrder.PostOrder, ({ item }) =>
        items.push(item)
    )

    expect(items).toEqual([2, 3, 1])
})
