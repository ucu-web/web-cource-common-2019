export const multiplyPointByScalar = (point, scalar) => point.map((x) => scalar * x);

export const addPoints = (point1, point2) => [point1[0] + point2[0], point1[1] + point2[1]];

let intermediateValues = {};

const factorialOptimized = (n) => {
    if (intermediateValues[n]) {
        return intermediateValues[n];
    }

    const res = n === 0 ? 1 : n * factorialOptimized(n - 1);
    intermediateValues[n] = res;
    return res;
};

export const combination = (n, i) => factorialOptimized(n) / (factorialOptimized(i) * factorialOptimized(n - i));

export const andriiFunction = (x) => x + 1;