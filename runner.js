const { read, solve, prettyBoard } = require('./sudoku');

const data = read('./puzzle.txt');
const result = solve(data);
prettyBoard(result);
