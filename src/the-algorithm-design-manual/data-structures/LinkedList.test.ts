class LinkedListNode<T> {
    constructor(
        public item: T,
        public next?: LinkedListNode<T>
    ) {}
}

interface ILinkedList<T> {
    insert(item: T): void
}

class LinkedList<T> implements ILinkedList<T> {
    constructor(private head?: LinkedListNode<T>) {}

    public insert(item: T) {
        if (this.head === null) {
            this.head = new LinkedListNode(item)
        } else {
            this.head = new LinkedListNode(item, this.head)
        }
    }
}

test('insert', () => {
    const list = new LinkedList()

    list.insert(3)
    list.insert(2)
    list.insert(1)

    expect(list).toEqual({
        head: {
            item: 1,
            next: { item: 2, next: { item: 3, next: undefined } },
        },
    })
})
