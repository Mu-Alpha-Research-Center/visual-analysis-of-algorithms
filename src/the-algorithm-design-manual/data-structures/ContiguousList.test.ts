import FixedArray from './FixedArray.test'

interface IContiguousList<T> {
    insert(item: T): void
    search(item: T): T | null
    delete(item: T): void
}

class ContiguousList<T> implements IContiguousList<T> {
    public items: T[]

    constructor(...items: T[]) {
        this.items = new FixedArray(items.length)
        for (let i = 0; i < items.length; i++) {
            this.items[i] = items[i]
        }
    }

    *[Symbol.iterator]() {
        for (const item of this.items) {
            yield item
        }
    }

    public insert(item: T) {
        const newLength = this.items.length + 1
        const newItems = new FixedArray<T>(newLength)

        newItems[0] = item
        for (let i = 0; i < this.items.length; i++) {
            newItems[i + 1] = this.items[i]
        }

        this.items = newItems
    }

    public search(otherItem: T): T | null {
        for (const item of this) {
            if (item === otherItem) {
                return item
            }
        }
        return null
    }

    public delete(otherItem: T) {
        let i = 0
        for (const item of this) {
            if (item === otherItem) {
                break
            }
            i++
        }

        const newLength = this.items.length - 1
        const newItems = new FixedArray<T>(newLength)
        for (let j = 0; j < i; j++) {
            newItems[j] = this.items[j]
        }
        for (let j = newLength; j > i; j--) {
            newItems[j - 1] = this.items[j]
        }

        this.items = newItems
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
    const list = new ContiguousList(1, 2, 3, 4, 5)

    list.delete(2)

    expect(list.items).toEqual([1, 3, 4, 5])
})
