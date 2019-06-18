$(function () {
    let arr = $(".main__articles > article").map(function() {return this.id});
    let paste_array = arr.get();

    let data = [
        ["../img/sick1.jpg", "Guk Andriana","leikimiya","3/7 already raised",
            "11 years old","B(III)","Ukraine"],
        ["../img/sick2.jpg", "Bondar Serhii","limfoma","1/2 already raised",
            "31 years old","AB","Ukraine"],
        ["../img/sick3.jpg", "Dvyxrechen'ska Sofiya","Congenital heart defect",
            "1/5 already raised", "2 years old","any","Ukraine"],
        ["../img/sick4.jpg", "Shostakova Anna","bloodloos while childbirth",
            "0/1 already raised", "31 years old","any","Ukraine"],
        ["../img/sick5.jpg", "Raspopin Oleg","leikoz","0/2 already raised",
            "55 years old","B(III)","Ukraine"],
        ["../img/sick6.jpg", "Yunda Leonid","mieloma","1/3 already raised",
            "66 years old","A(II)","Ukraine"]
    ];

    paste_array.forEach(function (el, i) {
        $("#"+el).loadTemplate($("#template"), {
            picture: data[i][0],
            name: data[i][1],
            illness: data[i][2],
            status: data[i][3],
            age: data[i][4],
            blood_type: data[i][5],
            where: data[i][6]
        });
    });

});

