// https://leetcode.com/problems/merge-two-sorted-lists
// https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/

import ListNode from './ListNode'
import { runTests, todo } from './TestHelpers'

type NullableListNode = ListNode | null

function mergeTwoLists(l1: NullableListNode, l2: NullableListNode): NullableListNode {
  let head: NullableListNode = new ListNode(),
      tail: NullableListNode = head
  let p1: NullableListNode = l1,
      p2: NullableListNode = l2
  while (true) {
    if (p1 && p2) {
      if (p1.val < p2.val) {
        tail.next = p1
        p1 = p1.next
      } else {
        tail.next = p2
        p2 = p2.next
      }
    } else if (p1) {
      tail.next = p1
      p1 = p1.next
    } else if (p2) {
      tail.next = p2
      p2 = p2.next
    } else {
      break
    }
    tail = tail.next
  }
  return head.next
}

runTests(mergeTwoLists, [
  [ListNode.from([]), ListNode.from([]), ListNode.from([])],
  [ListNode.from([1]), ListNode.from([]), ListNode.from([1])],
  [ListNode.from([]), ListNode.from([1]), ListNode.from([1])],
  [ListNode.from([1]), ListNode.from([2]), ListNode.from([1, 2])],
  [ListNode.from([2]), ListNode.from([1]), ListNode.from([1, 2])],
  [ListNode.from([1, 3, 5]), ListNode.from([2, 4]), ListNode.from([1, 2, 3, 4, 5])],
  [ListNode.from([1, 3]), ListNode.from([2, 4, 5]), ListNode.from([1, 2, 3, 4, 5])],
  [ListNode.from([1, 2, 4]), ListNode.from([1, 3, 4]), ListNode.from([1, 1, 2, 3, 4, 4])],
  [ListNode.from([5]), ListNode.from([1, 2, 4]), ListNode.from([1, 2, 4, 5])],
])
