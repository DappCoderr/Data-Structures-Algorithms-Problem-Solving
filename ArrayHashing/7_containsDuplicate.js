// Problem: https://leetcode.com/problems/contains-duplicate/description/

// Method 1 - Frequency mapping
function containsDuplicate(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  return Object.values(map).some((x) => x > 1);
}

// containsDuplicate([2, 14, 18, 22, 1, 14]);

// var containsDuplicate = function (nums) {
//   nums.sort((x, y) => x - y);
//   flag = 0;
//   for (let i = 0; i <= nums.length - 1; i++) {
//     if (nums[i] === nums[i - 1]) {
//       flag++;
//       break;
//     }
//   }
//   return flag == 1 ? true : false;
// };

// containsDuplicate([3, 3]);
