$(document).ready(function () {
    $('.main-header__arrow-button').click(function () {
        $("#main_header__log").toggleClass('main-header__log-hidden');
        $('#main_header__log').toggleClass('main-header__log-content');
    });
    $('.main-header__arrow-button, .main-header__log-content').mouseout(function () {
        $("#main_header__log").addClass('main-header__log-hidden');
        $('#main_header__log').removeClass('main-header__log-content');
    });
    $('.main-header__dropdown-content').hover(function () {
        $(".main-header__dropdown-trigger").addClass('main-header__dropdown-trigger_on-hover');
    }, function () {
        $(".main-header__dropdown-trigger").removeClass('main-header__dropdown-trigger_on-hover');
        });
    $('.main-header__search-button').click(function() {
        $(this).toggleClass('main-header__search-icon');
        $(".main-header__search-form").toggleClass("hidden-element");
        $(this).toggleClass('main-header__cancel-icon');
        $(".log").toggleClass("main-header__log-button");
        $(".arrow").toggleClass("main-header__arrow-button");
        $(".main-header__search-form").toggleClass("main-header__search-form_visible");
        $(".log").toggleClass("hidden-element");
        $(".arrow").toggleClass("hidden-element");
    });
});


// $('.main-header__arrow-button').hover(function () {
//     $("#main_header__log").toggleClass('main-header__log-hidden');
//     $('#main_header__log').toggleClass('main-header__log-content');
// });

// var is_clicked = false;
//
// div$.on('mouseover', function () {
//     $(this).css('background-color', 'red');
// });
//
// div$.on('mouseout', function () {
//     if(!is_clicked) {
//         $(this).css('background-color', 'white');
//     }
// });
//
// div$.on('click', function () {
//     $(this).css('background-color', 'red');
//     is_clicked = true;
// });