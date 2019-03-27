for (let a = 1; a < 1000; a++) {
    for (let b = 1; b < 1000; b++) {
        if (a + b + Math.sqrt(a * a + b * b) == 1000) {
            console.log(a * b * Math.sqrt(a * a + b * b));
        }
    }
}