import Stack from './Stack'

test('push, peek, pop and isEmpty', () => {
  let stack = new Stack()

  stack.push(1)

  expect(stack.peek()).toEqual(1)
  expect(stack.pop()).toEqual(1)
  expect(stack.isEmpty()).toEqual(true)
})

test('iterator', () => {
  let stack = new Stack()

  stack.push(1)
  stack.push(2)

  let values = []

  for (let value of stack) {
    values.push(value)
  }

  expect(values).toEqual([2, 1])
})
