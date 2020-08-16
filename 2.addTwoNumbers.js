/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let list = new ListNode('h'),
        temp = list
    let add = 0,
        sum = 0

    while (l1 || l2) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
        add = ~~(sum / 10)
        sum = sum % 10
        temp.next = new ListNode(sum)
        temp = temp.next;
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
    }
    add && (temp.next = new ListNode(add))

    return list.next;
};