let searchForm = document.querySelector(".Search-form__input");
searchForm.addEventListener("focus", onFocus, true);
searchForm.addEventListener("blur", onBlur, true);


function onFocus() {
    document.querySelector(".Search-form").style = "box-shadow:0 0 0 4px rgba(0, 132, 255, .5)";
}

function setBorder(element) {
    element.style = "box-shadow:0 0 0 4px rgba(0, 132, 255, .5)";

}

function onBlur() {
    document.querySelector(".Search-form").style = "box-shadow:none";
}



