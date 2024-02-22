// Problem: https://leetcode.com/problems/sort-colors/

// Solved using Frequency mapping

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

// sortColors([1]);
