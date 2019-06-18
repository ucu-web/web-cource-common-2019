$(document).ready(function() {
    $("#timestamp_on-hover").hover(function () {
        $(this).html("Published 5 years ago")
    }, function () {
        $(this).html("Updated 3 days ago")
    })  ;
    $("#right-aside-menu__like-button").focus(function () {
        $(this).html("Like this list?")
    }, function () {
        $(this).html("You liked this list")
    }, function () {
        $(this).toggleClass("right-aside-menu__like-icon right-aside-menu__liked-icon")});
});
function myFunction() {
    var element = document.getElementById("right-aside-menu__like-icon");
    element.classList.toggle("right-aside-menu__liked-icon");
}
