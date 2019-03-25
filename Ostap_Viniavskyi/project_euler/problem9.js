for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < 1000; j++) {
        if (i + j + Math.sqrt(i * i + j * j) === 1000) {
            console.log(i * j * Math.sqrt(i * i + j * j));
        }
    }
}