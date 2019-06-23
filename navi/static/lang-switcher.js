let ru = document.getElementsByClassName("ru")[0];
let en = document.getElementsByClassName("en")[0];

en.addEventListener("click", function () {
    if (!this.classList.contains("lang-active")) {
        this.classList.add("lang-active");
        ru.classList.remove("lang-active");
    }
});

ru.addEventListener("click", function () {
    if (!this.classList.contains("lang-active")) {
        this.classList.add("lang-active");
        en.classList.remove("lang-active");
    }
});
