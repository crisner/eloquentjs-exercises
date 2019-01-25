// Count the number of B's in a string
function countBs(str) {
  const length = str.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (str[i] === 'B') {
      count++;
    }
  }
  return count;
}

// Count the number of the given letter in a string
function countChar(str, char) {
  const length = str.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4