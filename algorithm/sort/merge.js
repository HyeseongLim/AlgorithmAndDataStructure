import { randNumber } from "../../utils/randNumber.js";

let arr = randNumber(30);

function div(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.trunc(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return sort(div(left), div(right));
}

function sort(left, right) {
  const temp = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) temp.push(left.shift());
    else temp.push(right.shift());
  }
  return [...temp, ...left, ...right];
}

console.log(div(arr));
