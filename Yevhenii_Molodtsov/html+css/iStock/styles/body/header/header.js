function navigation_bar_close() {
    document.getElementById("body").style.transition = "all 0.3s ease-out 0s, z-index 0s linear 0.01s";
    document.getElementById("nav_hidden").style.display = "none";
    document.getElementById("body").classList.remove("show-left-menu");
}

function navigation_bar_open() {
    if(document.getElementById("nav_hidden").style.display === "block"){
        navigation_bar_close();
    }
    else{
        document.getElementById("body").classList.add("show-left-menu");
        document.getElementById("nav_hidden").style.display = "block";
        document.getElementById("nav_hidden").style.bottom = "0";
        document.getElementById("nav_hidden").style.left = "0";
        document.getElementById("nav_hidden").style.top = "0";
        document.getElementById("nav_hidden").style.position = "absolute";
        document.getElementById("nav_hidden").style.backgroundColor = "black";
        document.getElementById("nav_hidden").style.transform = "translateX(-300px)";
        document.getElementById("nav_hidden").style.width = "300px";
    }
}

function my_profile_close() {
    document.getElementById("body").style.transition = "all 0.3s ease-out 0s, z-index 0s linear 0.01s";
    document.getElementById("left_nav_hidden").style.display = "none";
    document.getElementById("body").classList.remove("show-right-menu");
}

function my_profile_open(){
    if(document.getElementById("left_nav_hidden").style.display === "block"){
        my_profile_close();
    }
    else {
        document.getElementById("body").classList.add("show-right-menu");
        document.getElementById("left_nav_hidden").style.display = "block";
        document.getElementById("left_nav_hidden").style.bottom = "0";
        document.getElementById("left_nav_hidden").style.top = "0";
        document.getElementById("left_nav_hidden").style.right = "0";
        document.getElementById("left_nav_hidden").style.left = "auto";
        document.getElementById("left_nav_hidden").style.position = "absolute";
        document.getElementById("left_nav_hidden").style.backgroundColor = "black";
        document.getElementById("left_nav_hidden").style.transform = "translateX(300px)";
        document.getElementById("left_nav_hidden").style.width = "300px";
    }
}