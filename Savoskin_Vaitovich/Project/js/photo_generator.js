$(function () {
    let clinic_id = null;
    $("#end").on("change",function () {
        clinic_id = document.getElementById('end').value;
        let v = document.getElementById("certificates_img");
        if (clinic_id !== "None"){
            v.src = "../img/certificat"+clinic_id+".jpg";
            v.style.display = "block";
        }else{
            v.style.display = "None";
        }
    });
});
