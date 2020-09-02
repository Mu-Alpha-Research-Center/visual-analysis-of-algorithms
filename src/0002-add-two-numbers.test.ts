// https://leetcode.com/problems/add-two-numbers/

import ListNode, { fromArray } from '../lib/ListNode'

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let a: ListNode | null = l1,
      b: ListNode | null = l2

  let head: ListNode | null = null,
      curr: ListNode | null = null

  let base: number = 10

  while (a || b) {
    let av = a?.val ?? 0,
        bv = b?.val ?? 0,
        ln = new ListNode(av + bv)

    if (curr) {
      curr.next = ln
      curr = curr.next
    } else {
      head = curr = ln
    }

    a = a?.next ?? null
    b = b?.next ?? null
  }

  curr = head

  while (curr) {
    if (curr.val >= base) {
      curr.val = curr.val % base
      if (curr.next) {
        curr.next.val += 1
      } else {
        curr.next = new ListNode(1)
      }
    }
    curr = curr.next
  }

  return head
}

let testEach = test.each([
  [[9], [9], [8, 1]],
  [[2, 4, 3], [5, 6, 4], [7, 0 ,8]],
])

testEach('addTwoNumbers(%p, %p)', (a, b, expected) => {
  expect(addTwoNumbers(fromArray(a), fromArray(b))).toStrictEqual(fromArray(expected))
})
