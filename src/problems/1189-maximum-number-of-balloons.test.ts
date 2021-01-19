// https://leetcode.com/problems/maximum-number-of-balloons/

import Tests from '../TestHelpers'

function maxNumberOfBalloons(text: string): number {
  // This linear solution involves using a map as an auxillary data structure.
  // We will use a map to keep track of letter counts so we can efficiently
  // check the entire string for occurences of the letters of the word balloon.
  let result:number = 0
  let map: Record<string, number> = {}
  // First, we will build a map by counting each letter in the string.
  for (let c of text) {
    map[c] = c in map ? map[c] + 1 : 1
  }
  // Then we will loop until we decrement the letter counts for the string
  // balloon from the map. Each time the loop runs, we have found an occurence
  // of balloon in the string and we can increment the result.
  while (map.b > 0 && map.a > 0 && map.l > 1 && map.o > 1 && map.n > 0) {
    result++
    map.b -= 1
    map.a -= 1
    map.l -= 2
    map.o -= 2
    map.n -= 1
  }
  return result
}

let tests = new Tests(
  ['nlaebolko', 1],
  ['loonbalxballpoon', 2],
  ['leetcode', 0]
)

tests.run(maxNumberOfBalloons)
