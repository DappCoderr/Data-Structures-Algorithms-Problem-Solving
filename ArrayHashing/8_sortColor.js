// Problem: https://leetcode.com/problems/sort-colors/

// Method 2
var sortColors = function (nums) {
  let zeros = 0;
  let ones = 0;
  let two = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros++;
    } else if (nums[i] === 1) {
      ones++;
    } else {
      two++;
    }
  }
  var k = 0;
  while (k < nums.length) {
    while (zeros > 0) {
      nums[k] = 0;
      zeros--;
      k++;
    }
    while (ones > 0) {
      nums[k] = 1;
      ones--;
      k++;
    }
    while (two > 0) {
      nums[k] = 2;
      two--;
      k++;
    }
  }
};

sortColors([2, 0, 2, 1, 1, 0]);

// Method 1 Solved using Frequency mapping (but not the optimal approach for all the test-cases)

// var sortColors = function (nums) {
//   const n = nums.length;
//   var map = {};
//   var k = 0;
//   for (let i = 0; i < n; i++) {
//     if (map[nums[i]]) {
//       map[nums[i]] += 1;
//     } else {
//       map[nums[i]] = 1;
//     }
//   }
//   for (let i = 0; i <= Object.keys(map).length; i++) {
//     while (map[i] >= 1) {
//       if (k < n) {
//         nums[k] = Object.keys(map)[i];
//         k++;
//       }
//       map[i] -= 1;
//     }
//   }
//   console.log(nums);
// };
