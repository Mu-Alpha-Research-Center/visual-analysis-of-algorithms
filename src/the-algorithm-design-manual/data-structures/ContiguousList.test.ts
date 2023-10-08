import FixedArray from './FixedArray.test'

interface IContiguousList<T> {
    insert(item: T): void
    search(item: T): number
    delete(item: T): void
}

class ContiguousList<T> implements IContiguousList<T> {
    public items: T[]
    public length: number

    constructor() {
        this.items = new FixedArray<T>(1)
        this.length = 0
    }

    static from<T>(...items: T[]): ContiguousList<T> {
        const list = new ContiguousList<T>()
        for (const item of items) {
            list.insert(item)
        }
        return list
    }

    public insert(item: T) {
        if (this.length === this.items.length) {
            const items = new FixedArray<T>(this.length * 2)
            for (let i = 0; i < this.items.length; i++) {
                items[i] = this.items[i]
            }
            this.items = items
        }
        this.items[this.length++] = item
    }

    public search(item: T): number {
        for (let i = 0; i < this.length; i++) {
            if (this.items[i] === item) {
                return i
            }
        }
        return -1
    }

    public delete(item: T) {
        let i = this.search(item)
        if (i === -1) {
            return
        }
        for (i; i < this.length; i++) {
            this.items[i] = this.items[i + 1]
        }
    }
}

test('insert', () => {
    const list = new ContiguousList()
    list.insert(1)
    list.insert(2)
    list.insert(3)
    expect(list.items).toEqual([1, 2, 3])
    expect(list.length).toEqual(3)
})

test('search', () => {
    const list = ContiguousList.from(1, 2, 3)
    expect(list.search(3)).toEqual(2)
})

test('delete', () => {
    const list = ContiguousList.from(1, 2, 3, 4, 5)
    list.delete(2)
    expect(list.items).toEqual([1, 3, 4, 5])
    list.delete(1)
    expect(list.items).toEqual([3, 4, 5])
    list.delete(6)
    expect(list.items).toEqual([3, 4, 5])
})
