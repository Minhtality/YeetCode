/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // Since an array can be huge, looping through each element in an array might take a while
    // Since this array is sorted, we can look at the middle element of the array
    // If middle element is smaller than target, we can discard the first half of the array.
    // We then make a new mid point in this second half
    // If the mid point is larger than the target, we can discard the right half
    // Keep spliting until mid is the target
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let midPoint;
    while(leftPointer <= rightPointer){
        midPoint = Math.floor(((leftPointer + rightPointer) / 2))
        if(nums[midPoint] === target)return midPoint;
        if(target < nums[midPoint]) {
            rightPointer = midPoint - 1;
        } else {
            leftPointer = midPoint + 1;
        }
    }
    return -1;
};

