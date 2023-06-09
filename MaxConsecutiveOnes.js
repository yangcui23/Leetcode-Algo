//Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
//what this means is that given an array of nums of 1s and 0s, k is now many 0s you can flip in a subarray , so in first one k is 2 , that means in a subarray you can flip 2 0s and turn them into a 1
//With that being said find the subarray that contains most 1s , in the first one you can flip the 2 0s that before and after the 4 1s so that makes it 6 1s.

const nums = [1,1,1,0,0,0,1,1,1,1,0];
const k = 2;
//
//output is 6
const nums2 = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
const k2 = 3;
//output is 10
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    // start of the window and end of the window
    let start = 0;
    let end = 0;
    //run a for loop of the array , the reason i m using end here is because that the end can increase as the loop go, making it a subarray

    for (end; end < nums.length;end ++){
        //so if we encounter a 0 , we can flip it, then we will make k--(decrease) since k is the maximum zeros allowed in a window.
        if (nums[end] === 0){
            k--;
        }
        //A negative k means we have used all allowed flips, and window has more than allowed
        //zeros, thus increase start pointer by 1 to keep the window size same;
        if (k < 0){
            // if the start pointer to be thrown out is 0 we increase k++;
            k = k + 1 - nums[start];
            start++;
        }
    }
    return end - start;
};

console.log(longestOnes(nums,k));
console.log(longestOnes(nums2,k2));