// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Long way for .reverse()
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

module.exports = reverse;

// Short way .reverse()
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

//  Forof Loop
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// Long way .reduce()
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

// Short way .reduce()
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}