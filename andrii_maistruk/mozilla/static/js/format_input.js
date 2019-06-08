let html = document.getElementById("format-html");
let text = document.getElementById("format-text");


function format_input(type) {
    if (text.checked && !type) {
        text.checked = false;
    }
    if (html.checked && type) {
        html.checked = false;
    }
}