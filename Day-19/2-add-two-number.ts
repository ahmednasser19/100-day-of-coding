/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;

    let value = v1 + v2 + carry;
    carry = value >= 10 ? 1 : 0;
    value = value % 10;
    curr.next = new ListNode(value);

    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return dummy.next;
}
