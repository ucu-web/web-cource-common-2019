let Timer = require("easytimer.js");

let timer = new Timer.Timer();

class GameTimer{

}
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    console.log(timer.getTimeValues().toString());
});

//start timer for 10 seconds