export default class FixedArray<T> extends Array<T> {
    constructor(size: number) {
        super(size)
        Object.seal(this.fill(undefined))
    }
}

test('add property', () => {
    const a = new FixedArray<number>(2)

    a[0] = 1
    a[1] = 2

    expect(() => {
        a[2] = 3
    }).toThrowError()
    expect(a).toEqual([1, 2])
})
