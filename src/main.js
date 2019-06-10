import Calendar from "./Calendar";
import ToDoList from './ToDoList'

const xhr = new XMLHttpRequest();
xhr.open('GET', 'db', false);
xhr.send();

const calendar = new Calendar(document.body.getElementsByTagName("section")[0]);
const toDoList = new ToDoList(document.body.getElementsByTagName("section")[1], JSON.parse(xhr.responseText));

const getDateFromLink = () => {
    try {
        let date = window.location.pathname.slice(1).split('-').map(n => +n);
        if (date.length !== 3) return undefined;
        return new Date(date[0], date[1] - 1, date[2]);
    } catch (e) {
        return undefined;
    }
};

const backUp = () => {
    xhr.open('POST', 'db', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(toDoList.backup()));
};

const renderDayTasks = (date) => {
    toDoList.render(date);
    calendar.goToDate(date);
    const day = document.querySelector(`.calendar__day[href='${window.location.pathname.slice(1)}']`);
    day.click();
    backUp();
};

const date = getDateFromLink();
if (typeof date !== "undefined") renderDayTasks(date);

calendar.onChangeMonth(() => {
    toDoList.render();
    backUp();
});

calendar.onDaySelect(day => {
    toDoList.render(new Date(day));
    backUp();
});

window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    backUp();
});

window.addEventListener('popstate', () => {
    const date = getDateFromLink();
    if (typeof date === "undefined") return;
    calendar.history = false;
    renderDayTasks(date);
    backUp();
});
