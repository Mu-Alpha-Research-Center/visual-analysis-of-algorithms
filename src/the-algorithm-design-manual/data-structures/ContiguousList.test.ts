import FixedArray from './FixedArray.test'

interface IContiguousList<T> {
    insert(item: T): void
    search(item: T): number
    delete(item: T): void
}

class ContiguousList<T> implements IContiguousList<T> {
    public items: T[]

    constructor(...items: T[]) {
        this.items = FixedArray.from(...items)
    }

    public insert(item: T) {
        // Allocate new fixed size array of length + 1
        // and copy items from old array into new array.
        const arrayLength = this.items.length + 1
        const array = new FixedArray<T>(arrayLength)
        array[0] = item
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i]
            const j = i + 1
            array[j] = item
        }
        this.items = array
    }

    public search(item: T): number {
        // Linear search for item.
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === item) {
                return i
            }
        }
        return -1
    }

    public delete(item: T) {
        // Search array for item.
        let itemIndex = this.search(item)
        if (itemIndex === -1) {
            return
        }
        // Allocate new fixed size array of length - 1
        // and copy items from old array into new array in a single pass
        // by keeping track of 2 pointers into each array (i, j)
        // and only incrementing j when i !== itemIndex.
        const array = new FixedArray<T>(this.items.length - 1)
        let j = 0
        for (let i = 0; i < this.items.length; i++) {
            if (i === itemIndex) {
                continue
            }
            array[j++] = this.items[i]
        }
        this.items = array
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
