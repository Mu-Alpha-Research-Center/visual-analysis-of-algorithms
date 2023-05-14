// https://leetcode.com/problems/lru-cache

import Tests from '../TestHelpers'

class LRUCache {
    capacity: number
    cache: Record<number, number>
    age: Record<number, number>
    clock: number

    // Initialize the LRU cache with positive size capacity.
    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = {}
        this.age = {}
        this.clock = 0
    }

    nextTick() {
        // Similar to a timestamp, the bigger the number, the newer it is. Except
        // this blocks on this.clock, we we got a monotonically increasing number.
        return this.clock++
    }

    // Return the value of the key if the key exists, otherwise return -1.
    get(key: number): number {
        if (key in this.cache) {
            // Set the age of the key to newer
            this.age[key] = this.nextTick()
            return this.cache[key]
        }
        return -1
    }

    // Update the value of the key if the key exists. Otherwise, add the key-value
    // pair to the cache. If the number of keys exceeds the capacity from this
    // operation, evict the least recently used key.
    put(key: number, value: number): void {
        let keys = Object.keys(this.cache)
        if (key in this.cache || keys.length < this.capacity) {
            this.cache[key] = value
            this.age[key] = this.nextTick()
        } else {
            let items = Object.entries(this.age).sort((a, b) => a[1] - b[1])
            let oldestKey = items[0][0]
            delete this.cache[oldestKey]
            delete this.age[oldestKey]
            this.put(key, value)
        }
        return null
    }
}

let tests = new Tests([
    ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'],
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
    [null, null, null, 1, null, -1, null, -1, 3, 4],
])

tests.runClass(LRUCache)
