// https://leetcode.com/problems/add-two-numbers/

import ListNode from '../DataStructures/ListNode'
import { runTests } from '../TestHelpers'

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

runTests(addTwoNumbers, [
  [ListNode.from([9]), ListNode.from([9]), ListNode.from([8, 1])],
  [ListNode.from([2, 4, 3]), ListNode.from([5, 6, 4]), ListNode.from([7, 0 ,8])]
])
