function backtrack(array) {
  const empty = findEmpty(array);
  if (!empty) return true;

  const [row, col] = empty;

  for (let num = 1; num <= 9; num++) {
    if (isValid(array, row, col, num)) {
      array[row][col] = num;

      if (backtrack()) return true;

      array[row][col] = null;
    }
  }

  return false;
}

function findEmpty(array) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (array[r][c] === null) return [r, c];
    }
  }
  return false;
}

function isValid(array, row, col, num) {
  for (let index = 0; index < 9; index++) {
    if (array[row][index] === num || array[index][col] === num) return false;
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (array[startRow + i][startCol + j] === num) return false;
    }
  }

  return true;
}

module.exports = { backtrack };
