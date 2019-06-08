import Calendar from "./Calendar";
import ToDoList from './ToDoList'

const calendar = new Calendar(document.body.getElementsByTagName("section")[0]);
const toDoList = new ToDoList(document.body.getElementsByTagName("section")[1]);

calendar.onChangeMonth(date => {
    // toDoList.render(date);
});

calendar.onDaySelect(day => {
    toDoList.render(day);
});
