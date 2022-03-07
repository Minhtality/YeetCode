/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// we can do a nested loop here and check every possible combination but it will be o(n^2)
// const twoSum = (nums, target) => {
//     const map = {};
//     for(let i = 0; i < nums.length; i++){
//         const compliment = target - nums[i];
//         //if map has the keyvalue pair, return result with two numbers
//         if(map.hasOwnProperty(compliment)){
//             return [map[compliment], i]
//         } 
//             map[nums[i]] = i
//         //if not, add compliment in object map
        
//     }
// };

// function twoSum(nums, target) {
//     const map = {};
//     for(let i = 0; i < nums.length; i++){
//         const compliment = target - nums[i];
//         if(map.hasOwnProperty(compliment)){
//             return [map[compliment], i]
//         }
//         map[nums[i]] = i
//     }

// };

//brute force

function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] + nums[i] === target) {
                return [i,j]
            }
        }
    }
}

// pointers

// hash map