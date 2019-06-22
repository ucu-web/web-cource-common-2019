$(document).ready(function() {
    $("#timestamp_on-hover").hover(function () {
        $(this).html("Published 5 years ago")
    }, function () {
        $(this).html("Updated 3 days ago")
    })  });
