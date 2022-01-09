import { randNumber } from "../utils/randNumber.js";

const SIZE = 10;
const input = randNumber(SIZE, false, 9999999);
let sumOfMax = 0,
  max = 0;

input.forEach((item) => {
  let tempNumber = item;
  let tempSum = 0;
  do {
    tempSum += tempNumber % 10;
    tempNumber = Math.floor(tempNumber / 10);
  } while (tempNumber > 0);
  if (tempSum > sumOfMax) {
    sumOfMax = tempSum;
    max = item;
  } else if (tempSum === sumOfMax || item > max) {
    max = item;
  }
});
console.log(input);
console.log(sumOfMax, max);
