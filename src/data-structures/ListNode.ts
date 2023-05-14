export default class ListNode {
    val: number
    next: ListNode | null

    constructor(val: number | null = null, next: ListNode | null = null) {
        this.val = val
        this.next = next
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
