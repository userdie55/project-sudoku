function read() {
  // fix
}

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard(grid) {
  const horizontalLine = '───────┼───────┼───────';

  for (let row = 0; row < 9; row++) {
    let line = '';
    for (let col = 0; col < 9; col++) {
      const val = grid[row][col];
      if (val !== null) {
        line += val.toString().red + ' ';
      } else {
        line += '· ';
      }
      if (col === 2 || col === 5) line += '│ ';
    }
    console.log(line);

    if (row === 2 || row === 5) {
      console.log(horizontalLine.gray);
    }
  }
}


