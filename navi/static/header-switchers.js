let headers = document.getElementsByClassName("block-second__header__switch");

for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", function () {
        if (!this.classList.contains("active-h2")) {
            this.classList.add("active-h2");
            if (i === 0) {
                headers[i+1].classList.remove("active-h2");
            } else {
                headers[i-1].classList.remove("active-h2");
            }

        }
    });
}