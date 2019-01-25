function chessboard(num) {
  let hash = '#';
  let space = ' ';
  let str = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      // Begin with space at even lines
      if (i == 0 || i % 2 == 0) {
        if (j == 0 || j % 2 == 0) {
          str += space;
        } else {
          str += hash;
        }
      } else { // Begin with hash at odd lines
        if (j == 0 || j % 2 == 0) {
          str += hash;
        } else {
          str += space;
        }
      }
      // Add new line character at the end of width size
      if (j == num - 1) {
        str += '\n';
      }
    }
  }
  console.log(str);
}

chessboard(8);