let arr = []

for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 100) + 1)
}

for (let i = 0; i < arr.length; i++) {
    const index = arr.indexOf(Math.min(...arr.slice(i)));
    [arr[i], arr[index]] = [arr[index], arr[i]]
}

console.log(arr)