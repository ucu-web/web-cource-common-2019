let x = document.querySelector(".Header__search-form__input");
x.addEventListener("focus", onFocus, true);
x.addEventListener("blur", onBlur, true);


function onFocus() {
    document.querySelector(".Header__search-form").style = "box-shadow:0 0 0 4px rgba(0, 132, 255, .5)";
}

function setBorder(element) {
    element.style = "box-shadow:0 0 0 4px rgba(0, 132, 255, .5)";

}

function onBlur() {
    document.querySelector(".Header__search-form").style = "box-shadow:none";
}



