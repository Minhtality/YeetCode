/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // Base case: if l1 is null, return l2, same for l2
    if(l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
            return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
            return l2;
    }
};

// list1 = [1,2,4], 
// list2 = [1,3,4]
// Output: [1,1,2,3,4,4]