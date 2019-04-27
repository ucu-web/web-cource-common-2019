let birdHTML = document.getElementById("bird");
let pipesHTML = document.getElementById("pipes");

let pipes = [];

pipes[0] = {
    x: 512 + "px",
    y: 0 + "px"
};

document.addEventListener( "keypress", (event) => {
    event.key === " " ? birdHTML.style.top = parseInt(window.getComputedStyle(birdHTML).top.slice(0, -2)) - 40 + "px" : null;
});

setInterval(
    () => {
        birdHTML.style.top = parseInt(window.getComputedStyle(birdHTML).top.slice(0, -2)) + 4 + "px";

        pipesHTML.innerHTML += `<div class="pipe pipe__north"></div><div class="pipe pipe__south"></div>`;

        if (parseInt(window.getComputedStyle(birdHTML).top.slice(0, -2))  > 512 - 118 - 26) {
            location.reload();
        }
    }, 50
);