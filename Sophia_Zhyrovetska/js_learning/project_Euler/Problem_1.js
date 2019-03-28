function findSumOfMultiples(n, m1, m2) {
    function sum(m) {
        return m * Math.trunc(Math.trunc(n/m) * Math.trunc(n/m + 1)) / 2
    }
    return sum(m1) + sum(m2) - sum(m1 * m2) - (n%m1 === 0 || n%m2 === 0 ? n : 0)
}
