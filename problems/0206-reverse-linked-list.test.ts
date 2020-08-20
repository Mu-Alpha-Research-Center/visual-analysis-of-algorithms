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

test('reverseList', () => {
  expect(reverseList(fromArray(1, 2, 3))).toStrictEqual(fromArray(3, 2, 1))
})
