import '../style/todolist.css'
import ToDoTask from "./ToDoTask";
import CheckBoxHelper from './CheckBoxHelper'
import {CreateForm, CreateInput, ConfigureForm, AssembleForm} from './FormHelper'

class ToDoList {
    constructor(container, tasks={}) {
        this.container = container;
        this.tasksValues = tasks;
        this.tasks = {};

        // If there are already stored tasks, convert them to ToDoTask objects
        for (const year in tasks) {
            if (!tasks.hasOwnProperty(year)) continue;
            for (const month in tasks[year]) {
                if (!tasks[year].hasOwnProperty(month)) continue;
                for (const day in tasks[year][month]) {
                    if (!tasks[year][month].hasOwnProperty(day)) continue;
                    this.initDay(this.tasks, {year, month, day});
                    tasks[year][month][day].forEach(task => {
                        const newTask = new ToDoTask(task);
                        newTask.onTaskDeletion(() => this.removeTask(newTask));
                        this.tasks[year][month][day].push(newTask);
                    });
                }
            }
        }
        console.log('end loop');

        this.selectAll = CreateInput('checkbox', 'todolist');
        this.selectAll.hidden = true;

        this.todoList = document.createElement('div');
        this.todoList.className = 'todolist';

        this.form = CreateForm('todolist');
        this.submit = CreateInput('submit', 'todolist', 'Save');
        this.cancel = CreateInput('reset', 'todolist', 'Cancel');

        // ConfigureForm(this.form);
        this.configureForm(this.form);
        this.render(new Date());
    }

    initDay(tasks, {year, month, day}) {
        tasks[year] = tasks[year] || {};
        tasks[year][month] = tasks[year][month] || {};
        tasks[year][month][day] = tasks[year][month][day] || [];
    }

    createInput() {
        this.taskInput = document.createElement('input');
        this.taskInput.className = 'todolist__input';
    }


    getTaskList(tasks) {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth() + 1;
        const day = this.currentDate.getDate();
        this.initDay(tasks, {year, month, day});
        return tasks[year][month][day];
    }

    addTask(task, tasksList) {
        let taskList = this.getTaskList(this.tasks);

        let newTask = new ToDoTask(task);
        taskList.push(newTask);
        newTask.render(tasksList);
        newTask.onTaskDeletion(() => this.removeTask(newTask));
        return newTask;
    }

    _removeTaskFromList(task, tasks) {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth() + 1;
        const day = this.currentDate.getDate();

        let taskList = this.getTaskList(tasks);
        const taskIndex = taskList.indexOf(task);
        if (taskIndex !== -1)
            tasks[year][month][day] = taskList.filter(el => taskIndex !== taskList.indexOf(el));

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

        let tasks = this.getTaskList(this.tasks);
        if (typeof tasks !== "undefined")
            tasks.forEach(task => task.render(taskList));

        let listChild = taskList.childNodes;
        let tasksCheckboxes = [];
        listChild.forEach(elem => tasksCheckboxes.push(elem.querySelector('input[type="checkbox"]')));
        new CheckBoxHelper(this.selectAll, tasksCheckboxes);
        return taskList;
    }

    commitTaskViaBlur(taskInput) {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth() + 1;
        const day = this.currentDate.getDate();

        if (taskInput.value.trim() === "")
            this.newTask.publishTaskDeletion();
        else {
            let taskList = this.getTaskList(this.tasksValues);
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

    configureInput(tasksList) {
        this.taskInput.addEventListener('focus', () => this.newTask = this.addTask("", tasksList));
        this.taskInput.addEventListener('input', () => this.newTask.update(this.taskInput.value));
        this.taskInput.addEventListener('blur', () => this.commitTaskViaBlur(this.taskInput));
    }

    configureForm(form) {
        form.addEventListener('submit', (e) => this.commitTaskViaSubmit(this.taskInput, e));
        form.addEventListener('reset', () => {if (typeof this.newTask !== "undefined") this.newTask.publishTaskDeletion()});
    }

    render(date) {
        this.currentDate = date;
        let tasksList = this.renderTasks();

        this.createInput();
        this.configureInput(tasksList);

        AssembleForm(this.form, [this.taskInput, this.submit, this.cancel]);
        this.todoList.innerHTML = '';

        this.todoList.appendChild(this.form);
        if (tasksList.childNodes.length > 0)
            this.todoList.appendChild(this.selectAll);
        this.todoList.appendChild(tasksList);

        let currentDate = document.createElement('div');
        currentDate.innerHTML = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        currentDate.style.width = '90px';
        currentDate.style.margin = 'auto';

        this.container.innerHTML = '';
        this.container.appendChild(currentDate);
        this.container.appendChild(this.todoList);
        return this.tasksValues;
    }

    backup() {
        return this.tasksValues;
    }
}

export default ToDoList;
