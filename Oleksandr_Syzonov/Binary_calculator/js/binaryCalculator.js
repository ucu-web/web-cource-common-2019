let result = document.createElement("div");
result.id = "res";
document.body.appendChild(result);
let buttons = document.createElement("div");
buttons.id = "btns";

let ids = [["btn0", "0"], ["btn1", "1"], ["btnClr", "C"], ["btnEql", "="], ["btnSum", "+"], ["btnSub", "-"], ["btnMul", "*"], ["btnDiv", "/"]];
for (i in ids) {
    let new_but = document.createElement("button");
    new_but.innerHTML = ids[i][1];
    new_but.id = ids[i][0];
    if (new_but.id !== "btnClr" && new_but.id !== "btnEql") {
        new_but.onclick = function () {
            result.innerHTML += new_but.innerHTML;
        }
    } else if (new_but.id === "btnClr") {
        new_but.onclick = function () {
            result.innerHTML = "";
        }
    } else {
        new_but.onclick = function () {
            result.innerHTML = evaluate(result.innerHTML);
        }
    }
    buttons.appendChild(new_but);
}

let evaluate = function (htmText) {
    let re = /(\d+)|\*|\+|-|\//g;
    let [n1, operator, n2] = htmText.match(re);
    n1 = parseInt(n1, 2);
    n2 = parseInt(n2, 2);
    if (operator === "/") {
        return Math.floor(n1 / n2).toString(2);
    } else {
        return eval(n1 + operator + n2).toString(2);
    }
};
document.body.appendChild(buttons);

