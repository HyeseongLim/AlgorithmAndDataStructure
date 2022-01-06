import { getRand } from "../../app.js";

let arr = getRand();

for (let i = 0; i < arr.length; i++) {
  const index = arr.indexOf(Math.min(...arr.slice(i)));
  [arr[i], arr[index]] = [arr[index], arr[i]];
}

console.log(arr);