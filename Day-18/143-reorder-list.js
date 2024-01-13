// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
//  Do not return anything, modify head in-place instead.
function reorderList(head) {
    // first we find the middle
    var slow = head;
    var fast = head.next;
    while (fast && fast.next) {
        slow.next = slow.next;
        fast.next = fast.next.next;
    }
    //   revere the second one
    var second = slow.next;
    slow.next = null;
    var prev = null;
    while (second) {
        var temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }
    //merge the two pointers
    var first = head;
    second = prev;
    while (second) {
        var tmp1 = first.next;
        var tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
}


console.log(reorderList([1, 2, 3, 4]))