import { randNumber } from "../../utils/randNumber.js";
import { HeapTree } from "../../datastructure/tree/HeapTree.js";

const arr = randNumber(Math.pow(2, 5) - 1);
const Heap = new HeapTree();
const result = [];

arr.forEach((item) => Heap.add(item));

for (let i = 0; i < arr.length; i++) {
  result.push(Heap.delete());
}

console.log(result);
