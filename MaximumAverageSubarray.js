// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
const nums = [1,12,-5,-6,50,3]

const k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// nums = [5], k = 1
// Output: 5.00000


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  if (nums.length === 1 && k === 1) {
    return nums[0];
  }

  let sum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};

console.log(findMaxAverage(nums,k))