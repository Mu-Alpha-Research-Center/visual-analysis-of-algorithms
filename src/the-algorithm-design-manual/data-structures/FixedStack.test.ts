import FixedArray from './FixedArray.test'

interface IStack<T> {
    push(item: T): void
    pop(): T
}

class FixedStack<T> implements IStack<T> {
    public items: T[]
    public size: number

    constructor(size: number) {
        this.items = new FixedArray(size)
        this.size = 0
    }

    static from<T>(...items: T[]): FixedStack<T> {
        const stack = new FixedStack<T>(items.length)
        for (let i = 0; i < items.length; i++) {
            stack.items[i] = items[i]
            stack.size++
        }
        return stack
    }

    push(item: T): void {
        if (this.size === this.items.length) {
            throw new Error('Out of Memory')
        }
        const newItems = new FixedArray<T>(this.items.length)
        for (let i = 0; i < this.items.length - 1; i++) {
            let j = i + 1
            newItems[j] = this.items[i]
        }
        newItems[0] = item
        this.items = newItems
        this.size++
    }

    pop(): T {
        const item = this.items.at(0)
        if (this.items.length > 0) {
            let i = 0
            for (let j = i + 1; j < this.items.length; j++) {
                this.items[i] = this.items[j]
                i++
            }
            this.items[i] = undefined
            this.size--
        }
        return item
    }
}

test('push', () => {
    const stack = new FixedStack(3)

    stack.push(1)
    expect(stack.items).toEqual([1, undefined, undefined])
    expect(stack.size).toEqual(1)

    stack.push(2)
    expect(stack.items).toEqual([2, 1, undefined])
    expect(stack.size).toEqual(2)

    stack.push(3)
    expect(stack.items).toEqual([3, 2, 1])
    expect(stack.size).toEqual(3)

    expect(() => stack.push(4)).toThrowError('Out of Memory')

    stack.pop()
    stack.push(4)
    expect(stack.items).toEqual([4, 2, 1])
    expect(stack.size).toEqual(3)
})

test('pop', () => {
    const stack = FixedStack.from(1, 2, 3)
    expect(stack.size).toEqual(3)

    expect(stack.pop()).toEqual(1)
    expect(stack.items).toEqual([2, 3, undefined])
    expect(stack.size).toEqual(2)

    expect(stack.pop()).toEqual(2)
    expect(stack.items).toEqual([3, undefined, undefined])
    expect(stack.size).toEqual(1)

    expect(stack.pop()).toEqual(3)
    expect(stack.items).toEqual([undefined, undefined, undefined])
    expect(stack.size).toEqual(0)
})
