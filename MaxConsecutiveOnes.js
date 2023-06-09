const nums = [1,1,1,0,0,0,1,1,1,1,0];

const k = 2;

const nums2 = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];

const k2 = 3;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = 0;
    let end = 0;

    for (end; end < nums.length;end ++){
        if (nums[end] === 0){
            k--;
        }

        if (k < 0){
            k = k + 1 - nums[start];
            start++;
        }
    }
    return end - start;
};

console.log(longestOnes(nums,k));
console.log(longestOnes(nums2,k2));