class LinkedListNode<T> {
    constructor(
        public item: T,
        public next?: LinkedListNode<T>
    ) {}
}

interface ILinkedList<T> {
    insert(item: T): void
    search(item: T): LinkedListNode<T> | null
    delete(item: T): void
}

class LinkedList<T> implements ILinkedList<T> {
    public head?: LinkedListNode<T>

    constructor(...items: T[]) {
        for (const item of items.reverse()) {
            this.insert(item)
        }
    }

    *[Symbol.iterator]() {
        let node = this.head
        while (node) {
            yield node
            node = node.next
        }
    }

    public insert(item: T) {
        this.head = new LinkedListNode(item, this.head)
    }

    public search(item: T): LinkedListNode<T> | null {
        for (const node of this) {
            if (node.item === item) {
                return node
            }
        }
        return null
    }

    public delete(item: T) {
        let prev = null
        for (const node of this) {
            if (node.item === item) {
                prev.next = node.next
                break
            }
            prev = node
        }
    }
}

test('insert', () => {
    const list = new LinkedList()

    list.insert(3)
    list.insert(2)
    list.insert(1)

    expect(list.head).toEqual({
        item: 1,
        next: { item: 2, next: { item: 3 } },
    })
})

test('search', () => {
    const list = new LinkedList(1, 2, 3)
    const item = list.search(3)

    expect(item).toEqual({ item: 3 })
})

test('delete', () => {
    const list = new LinkedList(1, 2, 3)

    list.delete(2)

    expect(list.head).toEqual({ item: 1, next: { item: 3 } })
})
