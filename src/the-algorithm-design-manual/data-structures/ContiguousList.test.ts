interface IContiguousList<T> {
    insert(item: T): void
    search(item: T): T | null
    delete(item: T): void
}

class ContiguousList<T> implements IContiguousList<T> {
    public items: T[] = []

    constructor(...items: T[]) {
        this.items = this.items.concat(items)
    }

    public insert(item: T) {
        this.items.unshift(item)
    }

    public search(otherItem: T): T | null {
        for (const item of this.items) {
            if (item === otherItem) {
                return item
            }
        }
        return null
    }

    public delete(otherItem: T) {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i]
            if (item === otherItem) {
                this.items.splice(i, 1)
                break
            }
        }
    }
}

test('insert', () => {
    const list = new ContiguousList()

    list.insert(3)
    list.insert(2)
    list.insert(1)

    expect(list.items).toEqual([1, 2, 3])
})

test('search', () => {
    const list = new ContiguousList(1, 2, 3)
    const item = list.search(3)

    expect(item).toEqual(3)
})

test('delete', () => {
    const list = new ContiguousList(1, 2, 3)

    list.delete(2)

    expect(list.items).toEqual([1, 3])
})
