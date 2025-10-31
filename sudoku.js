function read() {
  // fix
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
