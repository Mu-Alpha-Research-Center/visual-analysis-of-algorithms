// https://leetcode.com/problems/min-stack/description

import Tests from '../../TestHelpers'

class MinStack {
    stack: Array<number>
    min: number

    constructor() {
        this.stack = []
        this.min = Infinity
    }

    push(v: number): void {
        if (v < this.min) {
            this.min = v
        }
        this.stack.push(v)
        return null
    }

    pop(): void {
        const v = this.stack.pop()
        if (this.stack.length === 0) {
            this.min = Infinity
        } else {
            this.min = Math.min(...this.stack)
        }
        return null
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.min
    }
}

let tests = new Tests([
    ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'],
    [[], [-2], [0], [-3], [], [], [], []],
    [null, null, null, null, -3, null, 0, -2],
])

tests.runClass(MinStack)
