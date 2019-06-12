import Calendar from "./Calendar";
import ToDoList from './ToDoList'
import {getDateFromCurrentUrl} from './lib'

const xhr = new XMLHttpRequest();
xhr.open('GET', 'db', false);
xhr.send();
const section = document.getElementsByTagName("section");
const calendar = new Calendar(section[0]);
const toDoList = new ToDoList(section[1], JSON.parse(xhr.responseText));

const saveChanges = () => {
    xhr.open('POST', 'db', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(toDoList.backup()));
};

const renderPage = (date) => {
    toDoList.render(date);
    calendar.goToDate(date);
    const day = document.querySelector(`.calendar__day[href='${window.location.pathname.slice(1)}']`);
    day.click();
    saveChanges();
};

const date = getDateFromCurrentUrl();
if (typeof date !== "undefined") renderPage(date);

calendar.onChangeMonth(() => {
    toDoList.render();
    saveChanges();
});

calendar.onDaySelect(day => {
    toDoList.render(new Date(day));
    saveChanges();
});

window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    saveChanges();
});

window.addEventListener('popstate', () => {
    const date = getDateFromCurrentUrl();
    if (typeof date === "undefined") return;
    calendar.history = false;
    renderPage(date);
    saveChanges();
});
