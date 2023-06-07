
let nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

let nums2 = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var newArr = [];
    for (let i = 0 ; i < nums.length;i++ ){
        
        newArr.push(Math.pow(nums[i], 2));
        newArr.sort(function (a, b) {  return a - b;  });
    }
    return newArr;
};

console.log(sortedSquares(nums));
console.log(sortedSquares(nums2));