const getNumberOfDaysInMonth =  (date) => {
    const d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return d.getDate();
};

const chunk = (array, size = 1) => {
    let result = [];
    for (let i = 0; i < array.length; i+= size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

const generateCalendarModel = (startDay = 0) => {
    const DAYS_OF_THE_WEEK = 7; //Константа, що задає кількість днів в тиждні.

    let currentDate = new Date();   //Вибираєм поточну дату.
    const numberOfDays = getNumberOfDaysInMonth(currentDate); //Скільки днів в поточному місяці.

    //Визначимо з якого дня тиждня розпочинається наш місяць.
    currentDate.setDate(1);
    let firstDayOfWeek = currentDate.getDay();

    // Скоректуємо день початку тиждня відповідно стартового дня
    // (тиждень може розпочинатись з понеділка, вівторка, чи будь-якого іншого дня)
    firstDayOfWeek = (DAYS_OF_THE_WEEK - (startDay - firstDayOfWeek)) % DAYS_OF_THE_WEEK;

    // Згенеруємо масив, який буде відображенням нашого поточного місяця.
    let month = [
        ...new Array(firstDayOfWeek).fill(), // "префікс-масив"
        ...new Array(numberOfDays).fill().map((el, i) => i+1) // Календар
    ];

    return chunk(month, DAYS_OF_THE_WEEK) ; //Розбиваємо місяць на тиждні
};

const calendarModel = generateCalendarModel();


console.log(
    document.write(
     `<div class="calendar">${renderWeeks(calendarModel)}</div>`
    )
);

class Calendar {
    constuctor (container) {
        this.container = container;
        this.model = generateCalendarModel();
        this.render();
        this.initHnadlers();
    }


    renderDays(week) {
        week.map(day => `<div class = "calendar__day"> ${day || " "} </div>`).join(" ")
    }

    renderWeeks (weeks) {
        weeks.map(week => `${this.renderDays(week)} <br/>`).join(" ")
    }

    render () {
        this.container.innerHTML = `
        <div class = "calendar">
            <button class = "calendar__button calendar__button_prev">< prev</button>
            <button class = "calendar__button calendar__button_next">next ></button>
            <br>
            ${this.renderWeeks((this.model))}
        </div>
        `
    }
}

Calendar(document.body.getElementsByClassName("cal_holder")[0]);