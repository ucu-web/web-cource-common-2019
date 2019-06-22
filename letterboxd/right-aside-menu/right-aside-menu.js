$(document).ready(function () {
    $('.right-aside-menu__like-button').focus(function () {
        $("#right-aside-menu__like").removeClass('right-aside-menu__like-icon');
        $('#right-aside-menu__like').addClass('right-aside-menu__liked-icon');
            $(".right-aside-menu__like-text").html("Like this list?");
            $(".right-aside-menu__like-text").html("You liked this list")
        })
});
