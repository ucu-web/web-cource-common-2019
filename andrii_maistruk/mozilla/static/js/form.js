function show_details() {
    let email = document.getElementById("id_email");
    let details = document.getElementById("sign_up_details");
    if (email.value.toString().length >= 4) {
        details.style.visibility = "visible";
        details.style.display = "block";
    } else {
    }
}