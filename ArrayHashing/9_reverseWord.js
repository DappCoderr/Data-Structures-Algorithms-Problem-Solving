//leetcode.com/problems/reverse-words-in-a-string/

/* Method 1
var reverseWords = function (s) {
  var arrayOfString = s.trim().split(/\s+/);
  var newArray = [];
    let k = 0;
    for (let i = arrayOfString.length - 1; i >= 0; i--) {
      newArray[k] = arrayOfString[i];
      k++;
    }
  console.log(newArray.join(" "));
};
reverseWords("the sky is blue");
*/

//  Method 2
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

reverseWords("the sky is blue");
