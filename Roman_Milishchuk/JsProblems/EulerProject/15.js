let num = 21;
let mat = [[1]];
for (let i = 0; i < num - 1; i++) {
    mat[0].push(1);
    mat.push([...Array(num).keys()]);
    mat[i + 1][0] = 1;
}
for (let i = 1; i < num; i++) {
    for (let j = 1; j < num; j++) {
        mat[i][j] = mat[i][j - 1] + mat[i - 1][j];
    }
}
console.log(mat[num - 1][num - 1]);