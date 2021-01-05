// https://leetcode.com/problems/lru-cache

import { Tests } from '../TestHelpers'

class LRUCache {
  capacity: number

  constructor(capacity: number) {
    this.capacity = capacity
  }

  get(key: number): number {
    return 0
  }

  put(key: number, value: number): void {
    return null
  }
}

let tests = new Tests(
  [
    ['LRUCache', 'put'],
    [[2], [1, 1]],
    [null, null]
  ]
  // [
  //   ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'],
  //   [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
  //   [null, null, null, 1, null, -1, null, -1, 3, 4],
  // ]
)

tests.runClass(LRUCache)
