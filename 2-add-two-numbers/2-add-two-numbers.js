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
// var addTwoNumbers = function(l1, l2) {
//     let carry = 0;
//     let dummy = new ListNode(0);
//     let result = dummy;
    
//     while(l1 || l2 || carry){
//     // get value of l1 node
//         let l1Value = l1 ? l1.val : 0;
//     // get value of l2 node
//         let l2Value = l2 ? l2.val : 0;
//     // get the sum of these two nodes + carry 12
//         let resultDigit = (l1Value + l2Value + carry) % 10;
//     // store that sum into the next dummy node
//         dummy.next = new ListNode(resultDigit);
//     // update the current dummy head to next node
//         dummy = dummy.next;
//     // store any existing carry
//         carry = Math.floor((l1Value + l2Value + carry) / 10);
//     // move to next node on l1 if exist
//         l1 = l1 ? l1.next : null;
//     // move to next node on l2 if exist
//         l2 = l2 ? l2.next : null;
//     }
//     //return the result, cut out the first head
//     return result.next
// };
function addTwoNumbers(l1,l2) {
  let carry = 0;
  let dummy = new ListNode(0);
  let result = dummy;
  
  while(l1 || l2 || carry){
    // get val l1
    let valL1 = l1 ? l1.val : 0;
    // get val l2
    let valL2 = l2 ? l2.val : 0;
    // get result digit by sum of valL1 and valL2 + carry %10
    let resultDigit = (valL1 + valL2 + carry) % 10;
    // store resultDigit in a node
    dummy.next = new ListNode(resultDigit);
     // move to next node
    dummy = dummy.next;
    // store the carry
    carry = Math.floor((valL1 + valL2 + carry) / 10);
    // move to next l1/l2
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return result.next;
  
  
  
  // return result
}

// 243
// 564
//----
// 208
// if sum is , then 2 is the digit and 1 is the carry
// 
