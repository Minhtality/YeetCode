/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    //convert everything to positive
    const arr = [];
    for(let i = 0; i < nums.length; i ++){
        arr[i] = nums[i] * nums[i]
    }
    arr.sort((a,b) => a-b)
    return arr
};