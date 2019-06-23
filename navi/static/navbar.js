let categories = document.getElementsByClassName("navigation__item__category");
let navItems = document.getElementsByClassName("has_category");

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("mouseover", function () {
        categories[i].style.display = "block";
    });
    navItems[i].addEventListener("mouseout", function () {
        categories[i].style.display = "none";
    });
}