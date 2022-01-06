let arr = []

for(let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 100) + 1)
}

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
        if (arr[j] < arr[j - 1])
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
    }
}

console.log(arr)