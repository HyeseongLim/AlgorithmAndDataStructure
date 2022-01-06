import { randNumber } from "../../utils/randNumber.js";

const arr = randNumber(30);

const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const left = [],
    right = [];
  const index = Math.trunc(arr.length - 1);
  const pivot = arr[index];
  for (let i = 0; i < index; i++) {
    const item = arr[i];
    item < pivot ? left.push(item) : right.push(item);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(arr));
