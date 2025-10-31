const fs = require('fs');
const { EOL } = require('os');
const colors = require('colors');
const { backtrack } = require('./sup-functions/sup-solve');

function read(path, lineIndex = 0) {
  const data = fs.readFileSync(path, 'utf8');
  const lines = data.split(/\r?\n/).filter((line) => line.trim() !== '');

  if (lineIndex < 0 || lineIndex >= lines.length) {
    throw new Error(`Индекс строки вне диапазона. Доступно строк: ${lines.length}`);
  }

  const line = lines[lineIndex].trim();

  if (line.length !== 81) {
    throw new Error(`Строка должна содержать 81 символ, получено: ${line.length}`);
  }

  const grid = [];
  for (let row = 0; row < 9; row++) {
    const rowArr = [];
    for (let col = 0; col < 9; col++) {
      const ch = line[row * 9 + col];
      if (ch === '-') {
        rowArr.push(null);
      } else {
        rowArr.push(parseInt(ch, 10));
      }
    }
    grid.push(rowArr);
  }

  return grid;
}

function solve(board) {
  if (board.flat().filter((el) => el === null).length === 0) return board;
  if (board.flat().filter((el) => el !== null).length < 17) return board;

  const solvedBoard = board.map((el) => el.slice());
  const result = backtrack(solvedBoard);

  return result ? solvedBoard : board;
}

function isSolved(board) {
  return !board.flat().includes(null);
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
  if (isSolved(grid)) {
    return console.log('\n✅ Судоку решено');
  } else {
    return console.log('\n❌ Судоку не может быть решён');
  }
}

module.exports = {
  read,
  solve,
  prettyBoard,
};
