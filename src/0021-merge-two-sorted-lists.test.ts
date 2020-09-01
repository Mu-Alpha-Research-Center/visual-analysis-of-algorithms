// https://leetcode.com/problems/merge-two-sorted-lists/

import ListNode, { fromArray } from '../lib/ListNode'

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

const testEach = test.each([
  [[], [], []],
  [[0], [], [0]],
  [[], [0], [0]],
  // [[5], [1, 2, 4], [1, 2, 4, 5]],
  [[1], [2], [1, 2]],
  [[2], [1], [1, 2]],
  [[1, 3, 5], [2, 4], [1, 2, 3, 4, 5]],
  [[1, 3], [2, 4, 5], [1, 2, 3, 4, 5]],
  [[1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]],
])

testEach('mergeTwoLists(%p, %p)', (a, b, expected) =>
  expect(mergeTwoLists(fromArray(a), fromArray(b))).toStrictEqual(
    fromArray(expected)
  )
)
