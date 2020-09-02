// https://leetcode.com/problems/reverse-linked-list/

import ListNode, { fromArray } from '../lib/ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null,
      curr = head
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

let testEach = test.each([
  [[], []],
  [[1], [1]],
  [[1, 2, 3], [3, 2, 1]],
])

testEach('reverseList(%p)', (a, expected) => {
  expect(reverseList(fromArray(a))).toStrictEqual(fromArray(expected))
})
