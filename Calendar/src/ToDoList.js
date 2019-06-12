import '../style/todolist.css'
import ToDoTask from "./ToDoTask";
import {CreateForm, CreateInput, AssembleForm} from './FormHelper'
import {getDayTasks, refreshTodoContainer, stringsToTodoTasks} from "./ToDoHelper";
import {getYearMonthDay} from "./lib";

class ToDoList {
    constructor(container, tasks = {}) {
        this.container = container;
        this.tasksValues = tasks;
        this.tasks = {};

        // If there are already stored tasks, convert them to ToDoTask objects
        stringsToTodoTasks(tasks, this.tasks, this.removeTask.bind(this));

        this.todoList = document.createElement('div');
        this.todoList.className = 'todolist';

        this.form = CreateForm('todolist');
        this.submit = CreateInput('submit', 'todolist', 'Save');
        this.cancel = CreateInput('reset', 'todolist', 'Cancel');

        this.configureForm(this.form);
    }

    createTaskInput() {
        this.taskInput = document.createElement('input');
        this.taskInput.className = 'todolist__input';
    }

    addTask(task, tasksList) {
        let taskList = getDayTasks(this.tasks, this.currentDate);
        let newTask = new ToDoTask(task);
        taskList.push(newTask);
        newTask.render(tasksList);
        newTask.onTaskDeletion(() => this.removeTask(newTask));
        return newTask;
    }

    _removeTaskFromList(task, tasks) {
        const [year, month, day] = getYearMonthDay(this.currentDate);

        let taskList = getDayTasks(tasks, this.currentDate);
        const taskIndex = taskList.indexOf(task);
        if (taskIndex !== -1) tasks[year][month][day] = taskList.filter(el => taskIndex !== taskList.indexOf(el));

    }

    removeTask(task) {
        this._removeTaskFromList(task, this.tasks);
        this._removeTaskFromList(task.getValue(), this.tasksValues);
        this.newTask = undefined;
        this.render(this.currentDate);
    }

    renderTasks() {
        let taskList = document.createElement("ul");
        taskList.className = 'todolist__tasks';

        let tasks = getDayTasks(this.tasks, this.currentDate);
        if (typeof tasks !== "undefined") tasks.forEach(task => task.render(taskList));

        let listChild = taskList.childNodes;
        let tasksCheckboxes = [];
        listChild.forEach(elem => tasksCheckboxes.push(elem.querySelector('input[type="checkbox"]')));
        return taskList;
    }

    commitTaskViaBlur(taskInput) {
        const [year, month, day] = getYearMonthDay(this.currentDate);

        if (taskInput.value.trim() === "")
            this.newTask.publishTaskDeletion();
        else {
            let taskList = getDayTasks(this.tasksValues, this.currentDate);
            taskList.push(taskInput.value);
            this.tasksValues[year][month][day] = taskList;
        }
        taskInput.value = "";
    }

    commitTaskViaSubmit(taskInput, e) {
        e.preventDefault();
        taskInput.blur();
        taskInput.focus();
    }

    configureInput(whereToSubmit) {
        this.taskInput.addEventListener('focus', () => this.newTask = this.addTask("", whereToSubmit));
        this.taskInput.addEventListener('input', () => this.newTask.update(this.taskInput.value));
        this.taskInput.addEventListener('blur', () => this.commitTaskViaBlur(this.taskInput));
    }

    configureForm(form) {
        form.addEventListener('submit', (e) => this.commitTaskViaSubmit(this.taskInput, e));
        form.addEventListener('reset', () => (typeof this.newTask !== "undefined") ? this.newTask.publishTaskDeletion() : null);
    }

    render(date) {
        this.currentDate = date;

        this.createTaskInput();

        AssembleForm(this.form, [this.taskInput, this.submit, this.cancel]);
        this.todoList.innerHTML = '';

        let currentDate = document.createElement('div');

        if (typeof date !== "undefined") {
            let tasksList = this.renderTasks();
            this.configureInput(tasksList);
            this.todoList.appendChild(this.form);
            this.todoList.appendChild(tasksList);
            currentDate.innerHTML = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        }
        currentDate.className = 'todolist__current-day';

        refreshTodoContainer(this.container, currentDate, this.todoList);
    }

    backup() {
        return this.tasksValues;
    }
}

export default ToDoList;
