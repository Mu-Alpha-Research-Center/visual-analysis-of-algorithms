// https://leetcode.com/problems/reverse-linked-list

import ListNode from '../DataStructures/ListNode'
import { runTests } from '../TestHelpers'

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

runTests(reverseList, [
  [ListNode.from([]), ListNode.from([])],
  [ListNode.from([1]), ListNode.from([1])],
  [ListNode.from([1, 2, 3]), ListNode.from([3, 2, 1])],
])
