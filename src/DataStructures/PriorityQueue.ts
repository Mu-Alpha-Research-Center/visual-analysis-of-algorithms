type Comparator<T> = (a: T, b: T) => number

export default class PriorityQueue<T> {
  cmp: Comparator<T>
  queue: T[]

  constructor(cmp: Comparator<T>) {
    this.cmp = cmp
    this.queue = []
  }

  add(n: T): void {
    this.queue.push(n)
    this.queue.sort(this.cmp)
  }

  size(): number {
    return this.queue.length
  }

  poll(): T {
    return this.queue.shift()
  }
}
