let disciplines = document.getElementsByClassName("each-discipline");
let runner = document.getElementsByClassName("block-right__runner-issue")[0];

let initMargin = 24.5;
let withinMargin = 3;

for (let i = 0; i < disciplines.length; i++) {
    disciplines[i].addEventListener("click", function () {
        if (i === 0) {
            runner.style.left = `${ initMargin * (i+1) }px`;
        } else if (i === 1) {
            runner.style.left = `${ (initMargin * (i+1)) +  (withinMargin * (i+1)) }px`;
        } else if (i === 2) {
            runner.style.left = `${ (initMargin * (i+1)) +  (withinMargin * (i+2.3)) }px`;
        } else if (i === 3) {
            runner.style.left = `${ (initMargin * (i+1)) +  (withinMargin+i * (i+3)) }px`;
        } else if (i === 4) {
            runner.style.left = `${ (initMargin * (i+1)) +  (withinMargin+i * (i+1.7)) }px`;
        } else if (i === 5) {
            runner.style.left = `${ (initMargin * (i+1)) +  (withinMargin+i * (i+0.7))}px`;
        } else if (i === 6) {
            runner.style.left = `${ (initMargin * (i+1)) +  (withinMargin+i * i)}px`;
        } else if (i === 7) {
            runner.style.left = `${ (initMargin * (i+1)) +  (3*withinMargin + 5*i)}px`;
        }
    })
}