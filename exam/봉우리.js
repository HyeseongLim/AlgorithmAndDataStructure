import { randNumber } from "../utils/randNumber.js";

const SIZE = 5;
const matrix = [];
let count = 0;

matrix.push(new Array(SIZE + 2).fill(0));
for (let i = 0; i < SIZE; i++) {
  matrix.push([0, ...randNumber(SIZE, true, 99), 0]);
}
matrix.push(new Array(SIZE + 2).fill(0));

for (let i = 1; i < SIZE + 1; i++) {
  for (let j = 1; j < SIZE + 1; j++) {
    if (
      Math.max(
        matrix[i + 1][j],
        matrix[i - 1][j],
        matrix[i][j + 1],
        matrix[i][j - 1]
      ) < matrix[i][j]
    )
      count += 1;
  }
}

matrix.forEach((item) => console.log(...item));

console.log(count);
