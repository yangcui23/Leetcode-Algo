const s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

const s1 = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while(leftPointer < rightPointer) {
        let temp = s[leftPointer];
        s[leftPointer] = s[rightPointer];
        s[rightPointer] = temp;
        leftPointer++;
        rightPointer--;
    }
    return s;
};

console.log(reverseString(s));
console.log(reverseString(s1));