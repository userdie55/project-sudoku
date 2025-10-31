function drawGrid(array, horizontalLine) {
  console.clear();
  for (let i = 0; i < 9; i++) {
    let line = '';
    for (let j = 0; j < 9; j++) {
      line += array[i][j].toString() + ' ';
      if (j === 2 || j === 5) line += '│ ';
    }
    console.log(line);
    if (i === 2 || i === 5) console.log(horizontalLine);
  }
}

module.exports = { drawGrid };
