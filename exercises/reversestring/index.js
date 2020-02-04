// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Long and ugly .reverse()
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

module.exports = reverse;

// Short .reverse()
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

//  For-of Loop
// function reverse(str) {
//   let reversed = '';

//   for (let index of str) {
//     reversed = index + reversed;
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
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }