// Problem: https://leetcode.com/problems/3sum/description/

var threeSum = function (nums) {
  var n = nums.length;
  nums.sort((x, y) => x - y);
  newArray = [];
  for (let c = 0; c < n - 2; c++) {
    if (c == 0 || nums[c] !== nums[c - 1]) {
      // 2 sum 2 logic
      let a = c + 1;
      let b = n - 1;
      while (a < b) {
        const sum = nums[a] + nums[b] + nums[c];
        if (sum === 0) {
          newArray.push([nums[a], nums[b], nums[c]]);
          a++;
          while (nums[a] === nums[a - 1] && a < b) a++;
        } else if (sum > 0) {
          b--;
        } else {
          a++;
        }
      }
    }
  }
  return newArray;
};
