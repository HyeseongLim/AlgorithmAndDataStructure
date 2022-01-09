import {randNumber} from "../utils/randNumber.js";

//const input = randNumber(20, true);
//const input = [130, 135, 148, 140, 145, 150, 150, 153];
const SIZE = 5;
const matrix = [];
let input;
let dia1 = 0,
  dia2 = 0,
  low = 0,
  column = new Array(SIZE).fill(0);

for (let i = 0; i < SIZE; i++) {
  input = randNumber(5, true, 99);
  matrix.push(input);
}

matrix.forEach((item, index) => {
  let sum = item.reduce((acc, item) => acc + item);
  if (sum > low) low = sum;

  item.forEach((col, index) => (column[index] += col));

  dia1 += item[index];
  dia2 += item[SIZE - 1 - index];
});

console.log(matrix);
console.log(Math.max(dia1, dia2, low, Math.max(...column)));
