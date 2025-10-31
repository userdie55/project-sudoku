const { read, solve, prettyBoard } = require('./sudoku');

const data = read('./puzzles.txt', process.argv[2]);
const result = solve(data);
prettyBoard(result);
