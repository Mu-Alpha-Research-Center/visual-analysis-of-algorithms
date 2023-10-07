import FixedArray from './FixedArray.test'

interface IContiguousList<T> {
    insert(item: T): void
    search(item: T): number
    delete(item: T): void
}

class ContiguousList<T> implements IContiguousList<T> {
    public items: T[]
    public length: number
    public resizeCoefficient: number = 2

    constructor(...items: T[]) {
        this.items = this.resize(...items)
        this.length = items.length
    }

    private atCapacity(): boolean {
        return this.length === this.items.length
    }

    private resize(...items: T[]): T[] {
        const capacity = (items.length + 1) * this.resizeCoefficient
        const newItems = new FixedArray<T>(capacity)
        for (let i = 0; i < items.length; i++) {
            newItems[i] = items[i]
        }
        return items
    }

    public insert(item: T) {
        if (this.atCapacity()) {
            this.items = this.resize(...this.items)
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
    const list = new ContiguousList(1, 2, 3)
    const itemIndex = list.search(3)
    expect(itemIndex).toEqual(2)
})

test('delete', () => {
    const list = new ContiguousList(1, 2, 3, 4, 5)
    list.delete(2)
    expect(list.items).toEqual([1, 3, 4, 5])
    list.delete(1)
    expect(list.items).toEqual([3, 4, 5])
    list.delete(6)
    expect(list.items).toEqual([3, 4, 5])
})
