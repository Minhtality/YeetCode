/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//     if(!root) return [];
//     let stack = [root];
//     let result = [];
//     while(stack.length){
//         let node = stack.pop();
//         result.push(node.val);
//         if(node.right) {
//            stack.push(node.right); 
//         }
//         if(node.left) {
//             stack.push(node.left);
//         }
//     }
//     return result;
// };

// no root, return empty array
// stack[]
// result[1,2,3]
// currentNode[3]

//      1 
//     2 
//    3

//  1
// 2 5
//3 4

const preorderTraversal = function(root) {
    if(!root) return [];
    const result = [];
    const traverse = function(node) {
        if(!node) return null;
        result.push(node.val);
        if(node.left) {
            traverse(node.left)
        }
        if(node.right) {
            traverse(node.right);
        }
    }
    traverse(root);
    return result;
}


// if there is no node, return null,
// result.push(node.val)


// currentNode[3]
// result[1,2,3]