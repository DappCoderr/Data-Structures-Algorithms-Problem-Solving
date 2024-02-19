// Problem: Squares of a Sorted Array

// Method 1
var sortedSquares = function (nums) {
  let arr = nums.map((e) => e ** 2);
  return arr.sort(compareNumbers);
};

function compareNumbers(a, b) {
  return a - b;
}

// Method 2 (Using Two Pointer)
var sortedSquares = function (nums) {
  let n = nums.length;
  var rightPointer = n - 1;
  var leftPointer = 0;
  var newArray = [n];
  for (let k = 0; k < n; k++) {
    nums[k] = nums[k] ** 2;
  }
  for (let i = n - 1; i >= 0; i--) {
    if (nums[leftPointer] <= nums[rightPointer]) {
      newArray[i] = nums[rightPointer];
      rightPointer--;
    } else {
      newArray[i] = nums[leftPointer];
      leftPointer++;
    }
  }
  return newArray;
};
