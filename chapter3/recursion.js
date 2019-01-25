// Recursion: Find if number is even
function isEven(num) {
  // number zero is even
  if (num === 0) {
    return true;
  }
  // number one is odd
  else if (num <= 1) {
    return false;
  }
  // (num-2) resulting in odd or even
  else {
    return isEven(num - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false