export class HeapTree {
  heap;

  constructor() {
    this.heap = [];
    this.heap.splice(0, 1, NaN);
  }

  swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  };

  add = (value) => {
    this.heap.push(value);

    let child = this.heap.length - 1;
    let parents = Math.round(child / 2);

    while (this.heap[parents] > this.heap[child] && child > 1) {
      this.swap(parents, child);
      child = parents;
      parents = Math.round(child / 2);
    }
  };

  get = () => {
    return this.heap;
  };

  print = () => {
    const target = this.heap.slice(1);
    for (let i = 1; target.length > 0; i *= 2) {
      let temp = [];
      for (let j = 0; j < i; j++) {
        temp.push(target.shift());
      }
      console.log(temp.join("  "));
    }
  };

  delete = () => {
    let left,
      right,
      cursor = 1;
    let values;

    this.swap(1, this.heap.length - 1);

    const target = this.heap.pop();

    while (true) {
      left = cursor * 2;
      right = cursor * 2 + 1;

      // 중복이 없기 때문에 둘 모두 undefined 경우에만 true
      if (this.heap[left] === this.heap[right]) return target;

      values = [this.heap[cursor], this.heap[left], this.heap[right]];

      if (values[0] > values[1] || values[0] > values[2]) {
        if (values[1] < values[2] || values[2] === undefined) {
          this.swap(cursor, left);
          cursor = left;
        } else {
          this.swap(cursor, right);
          cursor = right;
        }
        left = cursor * 2;
        right = cursor * 2 + 1;
      } else {
        return target;
      }
    }
  };
}
