let nav = document.getElementsByClassName('nav-container')[0];

window.addEventListener('load', () => {
    if (window.pageYOffset > 500) {
        nav.classList.add('nav-container_white');
    }
});

window.addEventListener('mousewheel', (e) => {

    if (window.pageYOffset > 50 && window.pageYOffset < 500) {
        nav.classList.add('nav-container_white');
        nav.classList.remove('nav-container_hidden');
    } else if (window.pageYOffset <= 50) {
        nav.classList.remove('nav-container_white');
        nav.classList.remove('nav-container_hidden');
    }


    if (e.wheelDelta >= 15) {
        if (window.pageYOffset > 500) {
            nav.classList.remove('nav-container_hidden');
        }
    } else if (e.wheelDelta <= -15) {
        if (window.pageYOffset > 500) {
            nav.classList.add('nav-container_hidden');
        }
    }
});

let menu = document.getElementsByClassName('nav-container_mobile-overlay')[0];
let menuBtn = document.getElementById('menu-btn');
let menuCloseBtn = document.getElementById('menu-close-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
});

menuCloseBtn.addEventListener('click', () => {
    menu.style.display = 'none';
});
