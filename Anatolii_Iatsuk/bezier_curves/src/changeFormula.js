export function changeFormula(div, points, t){
    let n = points.length - 1;
    let xFormula = "";
    let yFormula = "";
    let currentBinomialCoefficient = 1;
    let x = 0;
    let y = 0;

    for (let k = 0; k <= n; k++) {
        if (k !== 0) {
            currentBinomialCoefficient = currentBinomialCoefficient * (n + 1 - k) / k;
        }

        x += points[k][0] * currentBinomialCoefficient * Math.pow((1 - t), (n - k)) * Math.pow(t, k);
        y += points[k][1] * currentBinomialCoefficient * Math.pow((1 - t), (n - k)) * Math.pow(t, k);

        // add plus sign
        if (k !== 0) {
            xFormula += " + ";
            yFormula += " + ";
        }

        // add binomial coefficient
        if (currentBinomialCoefficient !== 1) {
            xFormula += currentBinomialCoefficient + "*";
            yFormula += currentBinomialCoefficient + "*";
        }

        // add (1-t)^(n-k)
        if (k !== n) {
            let s = "(1 - " + t.toFixed(2) + ")";

            // add power
            if (n - k > 1) s += "^" + (n - k);

            xFormula += s + "*";
            yFormula += s + "*";
        }

        // add t^k
        if (k !== 0) {
            let s = "" + t.toFixed(2) + "";

            if (k > 1) s += "^" + k;

            xFormula += s + "*";
            yFormula += s + "*";
        }

        xFormula += points[k][0];
        yFormula += points[k][1];
    }

    xFormula = x.toFixed(2) + " = " + xFormula;
    yFormula = y.toFixed(2) + " = " + yFormula;

    div.select(".xForm").text(xFormula);
    div.select(".yForm").text(yFormula);

    div.select("svg").selectAll(".timeLabel").text("t=" + t.toFixed(2));
}
