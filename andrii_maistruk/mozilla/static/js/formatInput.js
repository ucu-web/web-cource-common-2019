module.exports = function(type) {
    let html = document.getElementById("format-html");
    let text = document.getElementById("format-text");
    if (text.checked && !type) {
        text.checked = false;
    }
    if (html.checked && type) {
        html.checked = false;
    }
};
