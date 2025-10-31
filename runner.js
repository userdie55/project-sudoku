const { read, solve, prettyBoard } = require('./sudoku');

const data = read('./puzzles.txt');
const result = solve(data);
prettyBoard(result);
