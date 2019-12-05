// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Regular function
function reverseInt(n) {
  const revered = n
      .toString()
      .split('')
      .reverse()
      .join('')

  return parseFloat(revered) * Math.sign(n);
}

// Arrow function
// const reverseInt = (n) => parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);

module.exports = reverseInt;
