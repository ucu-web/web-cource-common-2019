import Calendar from "./Calendar";
import ToDoList from './ToDoList'

const xhr = new XMLHttpRequest();
xhr.open('GET', 'db', false);
xhr.send();

const calendar = new Calendar(document.body.getElementsByTagName("section")[0]);
// console.log('RESPONSE', typeof JSON.parse(JSON.parse(xhr.responseText)), JSON.parse(JSON.parse(xhr.responseText)));
const toDoList = new ToDoList(document.body.getElementsByTagName("section")[1], JSON.parse(JSON.parse(xhr.responseText)));

calendar.onDaySelect(day => {
    toDoList.render(day);
});

window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    xhr.open('POST', 'db', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(toDoList.backup()));
});
