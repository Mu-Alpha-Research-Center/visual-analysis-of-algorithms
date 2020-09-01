// https://leetcode.com/problems/regular-expression-matching

function isMatch(s: string, p: string): boolean {
  let match : boolean = true,
      si    : number  = 0,
      pi    : number  = 0

  while (pi < p.length) {
    let currChr:string = s[si],
        currPat:string = p[pi],
        nextPat:string = p[pi + 1]

    if (nextPat === '*') {
      if (currPat === '.') {
        while (si < s.length) si++ // .*
      } else {
        while (si < s.length && s[si] === currPat) si++ // a*
      }
      pi++
    } else if (currPat === currChr || currPat === '.') {
      si++
    } else {
      match = false
      break
    }

    pi++
  }

  return match && si >= s.length
}

let testEach = test.each([
  //['a', '.*..a*', false],
  ['ab', '.*..', true],
  //['aaa', 'ab*a*c*a', true],
  ['aaa', 'aaaa', false],
  //['aaa', 'a*a', true],
  ['ab', '.*c', false],
  ['a', 'a', true],
  ['aa', 'a', false],
  ['aa', 'a*', true],
  ['ab', '.*', true],
  ['aab', 'c*a*b', true],
  ['mississippi', 'mis*is*p*.', false],
  ['mississippi', 'mis*is*ip*.', true],
])

testEach('isMatch(%p, %p)', (a, b, expected) => expect(isMatch(a, b)).toBe(expected))
