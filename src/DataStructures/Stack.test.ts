import Stack from './Stack'

test('push, peek, pop and isEmpty', () => {
  let stack = new Stack()

  stack.push(1)

  expect(stack.peek()).toEqual(1)
  expect(stack.pop()).toEqual(1)
  expect(stack.isEmpty()).toEqual(true)
})
