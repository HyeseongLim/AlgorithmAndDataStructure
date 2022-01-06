export function randNumber(number) {
  const arr = [];

  for (let i = 0; i < number; i++) {
    let number = Math.round(Math.random() * 100);
    if (arr.indexOf(number) === -1) {
      arr.push(number);
    } else {
      i--;
    }
  }
  return arr;
}
