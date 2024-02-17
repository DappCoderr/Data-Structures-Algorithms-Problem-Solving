// Problem: https://leetcode.com/problems/reverse-string/description/

var reverseString = function (s) {
  const n = s.length;
  var i = 0;
  var j = n - 1;
  while (i <= j) {
    var temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  return s;
};
