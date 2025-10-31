const fs = require('fs');
const { backtrack } = require('./sup-functions/sup-solve');
const { drawGrid } = require('./sup-functions/sup-prettyboard');

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
  const horizontalLine = '──────┼───────┼───────';

  const coords = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      coords.push([i, j]);
    }
  }

  if (isSolved(grid)) {
    const displayGrid = Array.from({ length: 9 }, () => Array(9).fill(' '));

    let count = 0;
    drawGrid(displayGrid, horizontalLine);

    const interval = setInterval(() => {
      if (count >= coords.length) {
        clearInterval(interval);
        console.log('\n✅ Судоку решено!');
        return;
      }

      const [i, j] = coords[count];
      displayGrid[i][j] = grid[i][j];

      drawGrid(displayGrid, horizontalLine);
      count++;
    }, 150);
  } else {
    for (let i = 0; i < 9; i++) {
      let line = '';
      for (let j = 0; j < 9; j++) {
        const val = grid[i][j] ?? '-';
        line += val + ' ';

        if (j === 2 || j === 5) line += '│ ';
      }
      console.log(line);

      if (i === 2 || i === 5) console.log(horizontalLine);
    }
    console.log('\n❌ Судоку не может быть решён');
  }
}

module.exports = {
  read,
  solve,
  prettyBoard,
};
