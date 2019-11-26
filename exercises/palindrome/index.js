// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Utilizes .reverse() 
// 
// function palindrome(str) {
//   const flipItAndReverseIt = str.split("").reverse().join("");
//   if (str === flipItAndReverseIt){    
//     return true;
//   } else {
//     return false;
//   }
// }

// Not the most effective for .every()
// Does a bool check on every value in an arr.
// Uses double comparison, not the most efficient.
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length -i -1];
  });
}

// function palindrome(str) {}

// function palindrome(str) {}

module.exports = palindrome;
