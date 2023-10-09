import FixedArray from './FixedArray.test'

interface IStack<T> {
    push(item: T): void
    pop(): T
}

class FixedStack<T> implements IStack<T> {
    public items: FixedArray<T>
    public length: number

    constructor(size: number) {
        this.items = new FixedArray<T>(size)
        this.length = 0
    }

    static from<T>(...items: T[]): FixedStack<T> {
        const stack = new FixedStack<T>(items.length)
        for (let i = 0; i < items.length; i++) {
            stack.items[i] = items[i]
            stack.length++
        }
        return stack
    }

    push(item: T): void {
        if (this.length === this.items.length) {
            const items = new FixedArray<T>(this.length * 2)
            for (let i = 0; i < this.items.length; i++) {
                items[i] = this.items[i]
            }
            this.items = items
        }
        this.items[this.length++] = item
    }

    pop(): T {
        const i = this.length - 1
        const item = this.items[i]
        this.items[i] = undefined
        this.length--
        return item
    }
}

test('push', () => {
    const stack = new FixedStack(3)

    stack.push(1)
    expect(stack.items).toEqual([1, undefined, undefined])
    expect(stack.length).toEqual(1)

    stack.push(2)
    expect(stack.items).toEqual([1, 2, undefined])
    expect(stack.length).toEqual(2)

    stack.push(3)
    expect(stack.items).toEqual([1, 2, 3])
    expect(stack.length).toEqual(3)

    stack.push(4)
    expect(stack.items).toEqual([1, 2, 3, 4])
    expect(stack.length).toEqual(4)

    stack.push(5)
    expect(stack.items).toEqual([1, 2, 3, 4, 5])
    expect(stack.length).toEqual(5)
})

test('pop', () => {
    const stack = FixedStack.from(1, 2, 3)
    expect(stack.length).toEqual(3)

    expect(stack.pop()).toEqual(3)
    expect(stack.items).toEqual([1, 2, undefined])
    expect(stack.length).toEqual(2)

    expect(stack.pop()).toEqual(2)
    expect(stack.items).toEqual([1, undefined, undefined])
    expect(stack.length).toEqual(1)

    expect(stack.pop()).toEqual(1)
    expect(stack.items).toEqual([undefined, undefined, undefined])
    expect(stack.length).toEqual(0)
})
