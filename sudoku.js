const fs = require('fs');
const { EOL } = require('os');
const colors = require('colors');

function readPuzzleLine(path, lineIndex = 0) {
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

const { backtrack } = require('./sup-functions/sup-solve');
function solve(board) {
  if (board.flat().filter((el) => el === null).length === 0) return board;
  if (board.flat().filter((el) => el !== null).length < 17) return board;

  const solvedBoard = board.map((el) => el.slice());
  const result = backtrack(solvedBoard);

  return result ? solvedBoard : board; // Ура!!!
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
