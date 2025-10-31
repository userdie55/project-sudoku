const fs = require('fs');
const { EOL } = require('os');
const colors = require('colors');

function read() {
  try {
    const data = fs.readFileSync('puzzles.txt', 'utf-8');
    const lines = data.trim().split(EOL);
    const indexStr = process.argv[2];
    const index = parseInt(indexStr, 10); 

    if (isNaN(index) || index < 0 || index >= lines.length) {
      console.error('Некорректный индекс линии'.red);
      return [];
    }

    const line = lines[index].trim();
    const arr = line.split('');
    const result = [];

    for (let i = 0; i < arr.length; i += 9) {
      result.push(arr.slice(i, i + 9));
    }

    return result;
  } catch (err) {
    console.error(`Ошибка при чтении файла: ${err}`.red);
    return [];
  }
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
