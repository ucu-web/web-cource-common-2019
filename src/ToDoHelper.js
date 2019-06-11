import ToDoTask from "./ToDoTask";
import {getYearMonthDay} from "./lib";

export function stringsToTodoTasks(from_, to_, onTaskDeletionCallback) {
    for (const year in from_) {
        if (!from_.hasOwnProperty(year)) continue;
        for (const month in from_[year]) {
            if (!from_[year].hasOwnProperty(month)) continue;
            for (const day in from_[year][month]) {
                if (!from_[year][month].hasOwnProperty(day)) continue;
                initDay(to_, {year, month, day});
                from_[year][month][day].forEach(task => {
                    const newTask = new ToDoTask(task);
                    newTask.onTaskDeletion(() => onTaskDeletionCallback(newTask));
                    to_[year][month][day].push(newTask);
                });
            }
        }
    }
}

export function initDay(tasks, {year, month, day}) {
    tasks[year] = tasks[year] || {};
    tasks[year][month] = tasks[year][month] || {};
    tasks[year][month][day] = tasks[year][month][day] || [];
}

export function getDayTasks(tasks, date) {
    const [year, month, day] = getYearMonthDay(date);
    initDay(tasks, {year, month, day});
    return tasks[year][month][day];
}

export const refreshTodoContainer = (container, date, todoList) => {
    container.innerHTML = '';
    container.appendChild(date);
    container.appendChild(todoList);
};
