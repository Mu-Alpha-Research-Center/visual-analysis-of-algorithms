//https://leetcode.com/problems/reverse-linked-list/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  static fromArray(...vals: any[]): ListNode {
    let head = null,
        curr = null
    for (let val of vals) {
      if (curr === null) {
        head = curr = new ListNode(val)
      } else {
        curr = curr.next = new ListNode(val)
      }
    }
    return head
  }
}

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
  expect(reverseList(ListNode.fromArray(1, 2, 3))).
    toStrictEqual(ListNode.fromArray(3, 2, 1))
})
