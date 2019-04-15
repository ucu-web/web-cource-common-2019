let Timer = require("easytimer.js");

class GameTimer {
    constructor(container) {
        this.current_market_waits = true;
        this.container = container;
        this.render();
        this.timer = null;
        this.timerSound = new Audio("beep-01a.mp3");
    }

    render() {
        this.container.innerHTML = `
        <div class="Timer">
            <span class="Timer__time">
            06:00
            </span>
            <button class="Timer__start">
            Start
            </button>
            <button class="Timer__end">
            End
            </button>
        </div>`;
    }
    setTime(value){
        this.container.getElementsByClassName("Timer__time")[0].innerHTML = value.toString();
    }
    setCurrentTime(){
        this.setTime(this.timer.getTimeValues());
    }

    startTimer(timeSeconds) {
        this.timer = new Timer.Timer();
        this.timer.start({countdown: true, startValues: {seconds: timeSeconds}});
        this.setCurrentTime();
        this.timer.addEventListener('secondsUpdated', this.setCurrentTime.bind(this));
        this.timer.addEventListener('targetAchieved', this.timerSound.play.bind(this.timerSound));
    }
    stopTimer(){
        this.setTime("00:00:00");
    }

    initHandlers() {

    }
}

let myTimer = new GameTimer(document.body);
myTimer.stopTimer();

