export default class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? null : val)
    this.next = (next === undefined ? null : next)
  }

  static from(vals: any[]): ListNode {
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
