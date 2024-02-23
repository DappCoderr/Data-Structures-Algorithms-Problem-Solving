// Problem: https://leetcode.com/problems/move-zeroes/description/

var moveZeroes = function (nums) {
  let i = 0;
  let j = i + 1;

  while (j <= nums.length - 1) {
    if (nums[i] !== 0) {
      i++;
      j++;
    } else {
      if (nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
      j++;
    }
  }
};

moveZeroes([0, 1, 0, 3, 12]);

/*
Method 1 

var moveZeroes = function(nums) {
    flag = 0;
    let n = nums.length
    for(let i=0; i<n; i++){
        if(nums[i] == 0){
            flag++
        }
    }
    let k = n - flag
    let j = 0
    for(let i=0; i<n; i++){
        if(nums[i]>0 && j<k){
            nums[j] = nums[i]
            j++
        }
    }
    for(let i = n-flag; i<n; i++){
        nums[i] = 0
    }
};
*/
