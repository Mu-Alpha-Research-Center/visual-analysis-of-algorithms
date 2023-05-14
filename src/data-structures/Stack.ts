export default class Stack<T> implements Iterable<T> {
    values: T[]

    constructor(values: T[] = []) {
        this.values = values
    }

    push(item: T): void {
        this.values.push(item)
    }

    pop(): T {
        return this.values.pop()
    }

    peek(): T {
        return this.values[this.values.length - 1]
    }

    isEmpty(): boolean {
        return this.values.length === 0
    }

    next(): IteratorResult<T> {
        if (this.isEmpty()) {
            return { value: null, done: true }
        } else {
            return { value: this.values.pop(), done: false }
        }
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this
    }
}
