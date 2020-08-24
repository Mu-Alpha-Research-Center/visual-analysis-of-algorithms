// https://leetcode.com/problems/merge-two-sorted-lists/

import ListNode, { fromArray } from '../lib/ListNode'

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let c1 = l1,
      c2 = l2
  while (c1 || c2) {
    let n1 = c1?.next ?? null,
        n2 = c2?.next ?? null
    if (c1) c1.next = c2
    if (c2) c2.next = n1 ?? n2
    c1 = n1
    c2 = n2
  }
  return l1 ?? l2
}

const testEach = test.each([
  [[], [], []],
  [[0], [], [0]],
  [[], [0], [0]],
  [[1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]],
  [[1, 3, 5], [2, 4], [1, 2, 3, 4, 5]],
  [[1, 3], [2, 4, 5], [1, 2, 3, 4, 5]],
])

testEach('mergeTwoLists(%p, %p)', (a, b, expected) => {
  expect(mergeTwoLists(fromArray(a), fromArray(b))).toStrictEqual(fromArray(expected))
})
