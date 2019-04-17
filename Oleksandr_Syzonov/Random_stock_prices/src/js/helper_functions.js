export const roundToDecimalPl = (x, precision) => (Number(x.toFixed(precision)));

export function htmlToElement(html) {
    let element = document.createElement('div');
    element.innerHTML = html;
    return element.firstChild;
}