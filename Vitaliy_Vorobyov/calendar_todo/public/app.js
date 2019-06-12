let path = document.location.pathname.slice(1).split("-").map(elem => parseInt(elem));
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAYS_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const DAYS_OF_THE_WEEK = 7;

let selectedDate = path.length !== 1 ? new Date(path[0], path[1]-1, path[2]) : new Date();
let todos = localStorage["todos"] ? JSON.parse(localStorage.getItem("todos")) : {};
let todoValue = "";

// CalendarApp Code Part Here

numberOfDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
};

groupToWeeks = (month) => {
    let result = [];
    for (let i = 1; i < month.length; i += 7) {
        result.push(month.slice(i, i + 7));
    }

    if (month[0] === 1) {
        let pre = new Array(6);
        pre.push(1);
        result.unshift(pre);
    }

    return result
};

renderDays = (week) => {
    return week.map(day => day === undefined ? `<td></td>` : `<td><a href="${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}-${day}" class="CalendarApp__dayButton ${selectedDate.getFullYear() === path[0] && selectedDate.getMonth() + 1 === path[1] && selectedDate.getDate() === day ? "CalendarApp__dayButton--selected" : ""} ${selectedDate.getFullYear() === new Date().getFullYear() && selectedDate.getMonth() === new Date().getMonth() && day === new Date().getDate() ? "CalendarApp__dayButton--active" : ""}">${day || ''}</a></td>`).join("")
};

renderDay = (days) => {
    let row = document.createElement("tr");
    for (let i = 0; i < days.length; i++) {
        let td = document.createElement("td");
        let day = document.createElement("a");
        day.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.metaKey) {
                window.open(e.target.href, "_blank");
                return false;
            } else {
                history.pushState({}, e.target.href, e.target.href);
                path = document.location.pathname.slice(1).split("-").map(elem => parseInt(elem));
                selectedDate = path.length !== 1 ? new Date(path[0], path[1]-1, path[2]) : new Date();
                renderCalendarInfo();
                renderTodo();
                renderCalendarTable();
            }
        });
        day.href = `${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}-${days[i]}`;
        day.innerText = days[i] !== undefined ? days[i] : "";
        day.classList.add(`CalendarApp__dayButton`);
        document.getElementsByClassName("CalendarInfo__month")[0].innerText === MONTHS[selectedDate.getMonth()] && parseInt(document.getElementsByClassName("CalendarInfo__date")[0].innerText) === days[i] ? day.classList.add("CalendarApp__dayButton--selected") : "";
        selectedDate.getFullYear() === new Date().getFullYear() && selectedDate.getMonth() === new Date().getMonth() && days[i] === new Date().getDate() ? day.classList.add("CalendarApp__dayButton--active") : "";
        if (days[i] !== undefined) {
            td.appendChild(day);
        }
        row.appendChild(td);
    }
    return row;
};

renderWeeks = (container, weeks) => {
    weeks.map(week => container.appendChild(renderDay(week)));
};

createMonth = (date) => {
    let scopedDate = new Date(date);
    let numberOfDays = numberOfDaysInMonth(scopedDate);
    scopedDate.setDate(1);
    let firstDayOfWeek = scopedDate.getDay();
    firstDayOfWeek = (DAYS_OF_THE_WEEK - (-firstDayOfWeek)) % DAYS_OF_THE_WEEK;
    return groupToWeeks([
        ...new Array(firstDayOfWeek).fill(),
        ...new Array(numberOfDays).fill().map((el, i) => i + 1),
    ]);
};

renderCalendarTable = () => {
    const container = document.getElementsByClassName("CalendarApp__calendarTable")[0];
    let calendar = createMonth(selectedDate);
    const dayMonth = document.getElementsByClassName("CalendarApp__dateMonth")[0];
    dayMonth.innerText = `${MONTHS[selectedDate.getMonth()]}, ${selectedDate.getFullYear()}`;
    let prevButton = document.getElementsByClassName("CalendarApp__prevButton")[0];
    let nextButton = document.getElementsByClassName("CalendarApp__nextButton")[0];
    prevButton.href = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
    nextButton.href = `${selectedDate.getFullYear()}-${selectedDate.getMonth()+2}-${selectedDate.getDate()}`;
    container.innerHTML = `<tr>${DAYS_SHORT.map(day => `<td>${day}</td>`).join("")}</tr>`;
    renderWeeks(container, calendar);
    // container.innerHTML += `${renderWeeks(calendar)}`;
};

initializeCalendarTableHandlers = () => {
    let prevButton = document.getElementsByClassName("CalendarApp__prevButton")[0];
    let nextButton = document.getElementsByClassName("CalendarApp__nextButton")[0];
    prevButton.addEventListener("click", (e) => {
        e.preventDefault();
        history.pushState({}, e.target.href, e.target.href);
        path = document.location.pathname.slice(1).split("-").map(elem => parseInt(elem));
        selectedDate = path.length !== 1 ? new Date(path[0], path[1]-1, path[2]) : new Date();
        renderCalendarTable();
    });
    nextButton.addEventListener("click", (e) => {
        e.preventDefault();
        history.pushState({}, e.target.href, e.target.href);
        path = document.location.pathname.slice(1).split("-").map(elem => parseInt(elem));
        selectedDate = path.length !== 1 ? new Date(path[0], path[1]-1, path[2]) : new Date();
        renderCalendarTable();
    });
};

// CalendarInfo Code Part Here

renderCalendarInfo = () => {
    const calendarDate = document.getElementsByClassName("CalendarInfo__date")[0];
    calendarDate.innerText = selectedDate.getDate();
    const calendarMonth = document.getElementsByClassName("CalendarInfo__month")[0];
    calendarMonth.innerText = MONTHS[selectedDate.getMonth()];
    const calendarWeekday = document.getElementsByClassName("CalendarInfo__weekday")[0];
    calendarWeekday.innerText = DAYS[selectedDate.getDay()];
};

// Todos Code Part Here

isAlphaNumeric = str => {
    return str.match(/^[a-z0-9]+$/i) !== null;
};

addTodo = () => {
    if (todoValue.trim().length !== 0) {
        if (!todos[selectedDate.getFullYear()]) {
            todos[selectedDate.getFullYear()] = {};
            todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]] = {};
            todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()] = [];
            todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()].push(todoValue);
            localStorage.setItem("todos", JSON.stringify(todos));
        } else {
            if (!todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]]) {
                todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]] = {};
                todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()] = [];
                todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()].push(todoValue);
                localStorage.setItem("todos", JSON.stringify(todos));
            } else {
                if (!todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()]) {
                    todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()] = [];
                    todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()].push(todoValue);
                    localStorage.setItem("todos", JSON.stringify(todos));
                } else {
                    todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()].push(todoValue);
                    localStorage.setItem("todos", JSON.stringify(todos));
                }
            }
        }

        renderTodo();
    }
};

initializeTodoHandlers = () => {
    let todoInput = document.getElementsByClassName("Todo__input")[0];
    let todoForm = document.getElementsByClassName("Todo__form")[0];
    todoInput.addEventListener("change", (e) => {
        todoValue = e.target.value;
    });
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        e.target[0].value = "";
        addTodo();
        todoValue = "";
    });
};

renderTodo = () => {
    let todosList = document.getElementsByClassName("Todo__list")[0];
    todosList.innerHTML = "";
    todos[selectedDate.getFullYear()]
        ? todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]]
        ? todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()]
            ? todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()].map((todo) => {
                let item = document.createElement("li");
                let itemButton = document.createElement("button");
                itemButton.innerText = "X";
                itemButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()] = todos[selectedDate.getFullYear()][MONTHS[selectedDate.getMonth()]][selectedDate.getDate()].filter(value => value !== e.target.parentNode.firstChild.data);
                    localStorage.setItem("todos", JSON.stringify(todos));
                    todosList.removeChild(e.target.parentNode);
                });
                item.className = "Todo__item";
                item.innerText = todo;
                item.appendChild(itemButton);
                todosList.appendChild(item);
            }).join("")
            : null
        : null
        : null;
};

// Main

window.onpopstate = () => {
    path = document.location.pathname.slice(1).split("-").map(elem => parseInt(elem));
    selectedDate = path.length !== 1 ? new Date(path[0], path[1]-1, path[2]) : new Date();
    renderCalendarInfo();
    renderCalendarTable();
    renderTodo();
};


render = () => {
    renderCalendarInfo();
    renderTodo();
    renderCalendarTable();
};

initializeTodoHandlers();
initializeCalendarTableHandlers();
render();
