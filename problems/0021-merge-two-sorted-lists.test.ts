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

test('mergeTwoLists', () => {
  expect(mergeTwoLists(fromArray(), fromArray())).
    toStrictEqual(fromArray())
  expect(mergeTwoLists(fromArray(0), fromArray())).
    toStrictEqual(fromArray(0))
  expect(mergeTwoLists(fromArray(), fromArray(0))).
    toStrictEqual(fromArray(0))
  expect(mergeTwoLists(fromArray(1, 2, 4), fromArray(1, 3, 4))).
    toStrictEqual(fromArray(1, 1, 2, 3, 4, 4))
  expect(mergeTwoLists(fromArray(1, 3, 5), fromArray(2, 4))).
    toStrictEqual(fromArray(1, 2, 3, 4, 5))
  expect(mergeTwoLists(fromArray(1, 3), fromArray(2, 4, 5))).
    toStrictEqual(fromArray(1, 2, 3, 4, 5))
})
