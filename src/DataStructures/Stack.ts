export default class Stack<T> {
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
}
