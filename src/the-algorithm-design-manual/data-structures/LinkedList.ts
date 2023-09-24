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
    constructor(public head?: LinkedListNode<T>) {}

    public insert(item: T) {
        if (this.head === null) {
            this.head = new LinkedListNode(item)
        } else {
            this.head = new LinkedListNode(item, this.head)
        }
    }
}
