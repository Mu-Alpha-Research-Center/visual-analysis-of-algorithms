function isDigit(s: string): boolean {
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (let digit in digits) {
    if (s === digit) return true
  }
  return false
}

function count(s: string, pattern: string): number {
  let n = 0
  for (let c of s) {
    if (c === pattern) n++
  }
  return n
}

type Counts = { [key:string]: number }

function getCounts(s: string): Counts {
  let counts: Counts = {}

  for (let c of s) {
    counts[c] = c in counts ? counts[c] + 1 : 1
  }

  return counts
}

function isNumber(s: string): boolean {
  s = s.trim()

  let c: string,
      i: number = 0,
      counts: Counts = getCounts(s)

  const next = () => c = s[++i]
  const nextWhile = (p) => { while (p(c)) next() }
  const atEnd = () => i >= s.length

  if (counts['.'] > 1) return false
  if (counts['e'] > 1) return false
  if (counts['-'] > 1) return false
  if (counts['+'] > 1) return false
  if (s.length === 0) return false
  if (s[i] === 'e') return false

  while (!atEnd()) {
    c = s[i]

    if (c === '+' || c === '-' || c === '.') {
      next()
      if (!isDigit(c) && c !== '.') return false
    }
    else if (isDigit(c)) {
      next()
      nextWhile(isDigit)
      if (atEnd() || c === 'e') {
      }
      else if (c === '.') {
        next()
      } else {
        return false
      }
    }
    else if (c === 'e') {
      next()
      if (atEnd()) return false
      nextWhile(isDigit)
      if (s[i] === '.') return false
    }
    else {
      return false
    }
  }

  return true
}

test('isNumber', () => {
  expect(isNumber('46.e3')).toBe(true)
  expect(isNumber('+.8')).toBe(true)
  expect(isNumber('.1')).toBe(true)
  expect(isNumber('3.')).toBe(true)
  expect(isNumber('0')).toBe(true)
  expect(isNumber(' 0.1 ')).toBe(true)
  expect(isNumber('2e10')).toBe(true)
  expect(isNumber(' -90e3   ')).toBe(true)
  expect(isNumber(' 6e-1')).toBe(true)
  expect(isNumber('53.5e93')).toBe(true)
  expect(isNumber(' ')).toBe(false)
  expect(isNumber('.1.')).toBe(false)
  expect(isNumber('abc')).toBe(false)
  expect(isNumber('1 a')).toBe(false)
  expect(isNumber('95a54e53')).toBe(false)
  expect(isNumber(' 1e')).toBe(false)
  expect(isNumber('e3')).toBe(false)
  expect(isNumber(' 99e2.5 ')).toBe(false)
  expect(isNumber(' --6 ')).toBe(false)
  expect(isNumber('-+3')).toBe(false)
  expect(isNumber('1 4')).toBe(false)
  expect(isNumber('3-2')).toBe(false)
  expect(isNumber('..2')).toBe(false)
  expect(isNumber('6ee69')).toBe(false)
})
