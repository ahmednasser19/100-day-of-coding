// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//  Do not return anything, modify head in-place instead.
function reorderList(head: ListNode | null): void {
  // first we find the middle
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //   revere the second one
  let second = slow.next;
  slow.next = null;
  let prev = null;

  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  //merge the two pointers
  let first = head;
  second = prev;

  while (second) {
    let tmp1 = first.next;
    let tmp2 = second.next;
    first.next = second;
    second.next = tmp1;

    first = tmp1;
    second = tmp2;
  }
}
