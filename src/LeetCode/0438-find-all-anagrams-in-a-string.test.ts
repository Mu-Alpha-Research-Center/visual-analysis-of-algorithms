// https://leetcode.com/problems/find-all-anagrams-in-a-string/

import { runTests } from '../TestHelpers'

function newLetterHash(): number[] {
  let result: number[] = []
  for (let i = 0; i < 26; i++) result.push(0)
  return result
}

function incLetterHash(hash: number[], c: string) {
  let i = c.charCodeAt(0) - 'a'.charCodeAt(0)
  let n = hash[i]
  hash[i] = n ? n + 1 : 1
}

function findAnagrams(s: string, p: string): number[] {
  let result: number[] = []
  let hash: number[] = newLetterHash()
  for (let c of p) incLetterHash(hash, c)
  for (let i = 0; i < s.length; i++) {
    let j = i
    let otherHash: number[] = newLetterHash()
    while (j < i + p.length && j < s.length) {
      incLetterHash(otherHash, s[j])
      j++
    }
    if (hash.join('') === otherHash.join('')) result.push(i)
  }
  return result
}

runTests(findAnagrams, [
  ['cbaebabacd', 'abc', [0, 6]],
  ['abab', 'ab', [0, 1, 2]],
  ['ab', 'cd', []]
])
