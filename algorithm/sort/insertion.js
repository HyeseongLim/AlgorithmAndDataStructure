import { getRand } from "../../app.js";

let arr = getRand();

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j > 0; j--) {
    if (arr[j] < arr[j - 1]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
  }
}

console.log(arr);