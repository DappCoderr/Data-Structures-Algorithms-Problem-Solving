// Problem: https://leetcode.com/problems/valid-anagram/description/

// Anagram are words which has same set of characters

/*
Method 1
Bruteforce ->

s = slient
t = listen

sort s and t
if both return same set of characters then return true otherwise false
*/

// Method 2
// Using frequency mapping of characters

function isAnagram(s, t) {
  if (s.length != t.length) return false;

  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] === undefined) {
      return false;
    } else {
      map[t[i]] -= 1;
      if (map[t[i]] == 0) {
        delete map[t[i]];
      }
    }
  }

  return Object.keys(map).length == 0;
}

var s = "anagram";
var t = "nagaram";
isAnagram(s, t);
