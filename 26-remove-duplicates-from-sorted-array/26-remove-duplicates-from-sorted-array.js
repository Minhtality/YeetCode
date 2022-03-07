/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //if current is equal to previous, make previous = current, and increase current by 1 space
    let current = 0;
    if(nums.length === 0) return 0;
    for(let i = 1; i < nums.length; i++){
     if(nums[i] !== nums[current]){
          current++;
          nums[current] = nums[i];
      }
    }
    return current + 1;
};