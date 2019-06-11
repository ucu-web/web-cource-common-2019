let didScroll = false;
let lastScroll = 0;

// document.addEventListener("touchmove", ScrollStart, false);
// document.addEventListener("scroll", Scroll, false);
//
// function ScrollStart() {
//     //start of scroll event for iOS
// }
//
// function Scroll() {
//     //end of scroll event for iOS
//     //and
//     //start/end of scroll event for other browsers
// }

$(window).scroll(function() {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scroll();
    didScroll = false;
  }
}, 250);

function scroll() {
  let state = $(window).scrollTop();

  if (Math.abs(lastScroll - state) <= 5) return;

  document.getElementById("search-header").style.transition =
    "top 0.45s ease-out";
  if (state > 303 && state <= 560) {
    document.getElementById("search-header").classList.remove("search-bar");
    document.getElementById("search-header").classList.add("fixed-header");
    document.getElementById("search-header").style.transition = "";
    document.getElementById("search-header").style.top = "0";
  } else if (state < lastScroll && state > 303) {
    document.getElementById("search-header").classList.remove("search-bar");
    document.getElementById("search-header").classList.add("fixed-header");
    document.getElementById("search-header").style.top = "0";
  } else if (state > lastScroll) {
    document.getElementById("search-header").style.top = "-70px";
  } else {
    document.getElementById("search-header").style.top = "-70px";
    document.getElementById("search-header").classList.add("search-bar");
    document.getElementById("search-header").classList.remove("fixed-header");
  }

  // if($(window).scrollTop() < 304){
  //
  // }
  // else{
  //     document.getElementById("search-header").classList.remove('search-bar');
  //     document.getElementById("search-header").classList.add('fixed-header');
  // }

  lastScroll = state;
}
