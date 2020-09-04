// https://leetcode.com/problems/merge-two-sorted-lists

import ListNode from '../lib/ListNode'

declare let runTests

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let h: ListNode | null = null,
      a: ListNode | null = null,
      b: ListNode | null = null
  if (l1 && l2) {
    if (l1.val <= l2.val) {
      h = a = l1
      b = l2
    } else {
      h = a = l2
      b = l1
    }
  } else if (l1) {
    h = a = l1
  } else if (l2) {
    h = a = l2
  }
  while (a || b) {
    let n1: ListNode | null = a?.next ?? null,
        n2: ListNode | null = b?.next ?? null
    if (a) a.next = b
    if (b) b.next = n1 ?? n2
    a = n1
    b = n2
  }
  return sortList(h)
}

function sortList(head: ListNode | null): ListNode | null {
  // https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/
  return head
}

runTests(mergeTwoLists, [
  [ListNode.from([]), ListNode.from([]), ListNode.from([])],
  [ListNode.from([0]), ListNode.from([]), ListNode.from([0])],
  [ListNode.from([]), ListNode.from([0]), ListNode.from([0])],
  [ListNode.from([1]), ListNode.from([2]), ListNode.from([1, 2])],
  [ListNode.from([2]), ListNode.from([1]), ListNode.from([1, 2])],
  [ListNode.from([1, 3, 5]), ListNode.from([2, 4]), ListNode.from([1, 2, 3, 4, 5])],
  [ListNode.from([1, 3]), ListNode.from([2, 4, 5]), ListNode.from([1, 2, 3, 4, 5])],
  [ListNode.from([1, 2, 4]), ListNode.from([1, 3, 4]), ListNode.from([1, 1, 2, 3, 4, 4])],
  //[ListNode.from([5]), ListNode.from([1, 2, 4]), ListNode.from([1, 2, 4, 5])],
])
