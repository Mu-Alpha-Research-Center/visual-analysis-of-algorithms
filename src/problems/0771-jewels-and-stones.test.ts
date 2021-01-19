// https://leetcode.com/problems/jewels-and-stones

import Tests from '../TestHelpers'

function numJewelsInStones1(jewels: string, stones: string): number {
  // Use a map to count occurences of jewels in stones
  let map: Record<string, number> = {}
  for (let jewel of jewels) {
    if (!(jewel in map)) {
      map[jewel] = 0
    }
  }
  // Loop through stones. If current character is a jewel, increment the map.
  for (let i = 0; i < stones.length; i++) {
    let stone = stones.charAt(i)
    if (stone in map) {
      map[stone]++
    }
  }
  // Loop through map to sum the number of jewels.
  let numJewels: number = 0
  for (let num of Object.values(map)) {
    numJewels += num
  }
  // The time complexity is order of n + k + n.
  // * Create map O(n)
  // * Loop through stones O(k)
  // * Loop through map O(n)
  // The space complexity is order of n.
  // * Map O(n)
  return numJewels
}

function numJewelsInStones2(jewels: string, stones: string): number {
  // Use a set to test if stone is a jewel.
  let result: number = 0
  let set: Set<string> = new Set(jewels)
  // Loop through stones.
  for (let stone of stones) {
    // If current character is a jewel, increment result.
    if (set.has(stone)) result++
  }
  // The time complexity is order of n + 1.
  // * Looping over stones O(n)
  // * Set lookup O(1)
  // The space complexity is order n.
  // * Set O(n)
  return result
}

let tests = new Tests(
  ['aA', 'aAAbbbb', 3],
  ['zz', 'ZZ', 0]
)

tests.run(
  numJewelsInStones1,
  numJewelsInStones2
)
