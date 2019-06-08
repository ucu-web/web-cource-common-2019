import '../style/todolist.css'
import ToDoTask from "./ToDoTask";
import CheckBoxHelper from './CheckBoxHelper'
import {CreateSimpleForm, ConfigureForm, AssembleForm} from './FormHelper'

class ToDoList {
    constructor(container) {
        this.container = container;
        this.tasks = {};
        this.selectAll = document.createElement('input');
        this.selectAll.type = 'checkbox';
        this.selectAll.hidden = true;
        this.todoList = document.createElement('div');
        this.todoList.className = 'todolist';
        this.form = new SimpleForm('todolist');
        // this.createForm();
        this.configureForm();
        this.render(new Date());
    }

    createInput() {
        this.taskInput = document.createElement('input');
        this.taskInput.className = 'todolist__input';
    }

    _getTasksForDay(date) {
        let tasks = this.tasks[date.getFullYear()];
        if (typeof tasks === "undefined") return;
        tasks = tasks[date.getMonth() + 1];
        if (typeof tasks === "undefined") return;
        tasks = tasks[date.getDate()];
        if (typeof tasks === "undefined") return;
        return tasks;
    }

    getTaskList(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        this.tasks[year] = this.tasks[year] || {};
        this.tasks[year][month] = this.tasks[year][month] || {};
        this.tasks[year][month][day] = this._getTasksForDay(date) || [];
        return this.tasks[year][month][day];
    }

    addTask(date, task, tasksList) {
        let taskList = this.getTaskList(date);

        let newTask = new ToDoTask(task);
        console.log('add task');
        taskList.push(newTask);
        newTask.render(tasksList);
        newTask.onTaskDeletion(() => this.removeTask(date, newTask));
        return newTask;
    }

    removeTask(date, task) {
        console.log('removing');
        let taskList = this.getTaskList(date);
        const i = taskList.indexOf(task);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        if (i !== -1)
            this.tasks[year][month][day] = taskList.filter(el => i !== taskList.indexOf(el));
        this.newTask = undefined;
        this.render(date);
    }

    renderTasks(date) {
        let taskList = document.createElement("ul");
        taskList.className = 'todolist__tasks';

        let tasks = this._getTasksForDay(date);
        if (typeof tasks !== "undefined")
            tasks.forEach(task => task.render(taskList));

        let listChild = taskList.childNodes;
        let tasksCheckboxes = [];
        listChild.forEach(elem => tasksCheckboxes.push(elem.querySelector('input[type="checkbox"]')));
        new CheckBoxHelper(this.selectAll, tasksCheckboxes);
        return taskList;
    }

    commitTaskViaBlur(taskInput) {
        if (taskInput.value === "")
            this.newTask.publishTaskDeletion();
        taskInput.value = "";
    }

    commitTaskViaSubmit(taskInput, e) {
        e.preventDefault();
        taskInput.blur();
        taskInput.focus();
    }

    configureInput(date, tasksList) {
        this.taskInput.addEventListener('focus', () => this.newTask = this.addTask(date, "", tasksList));
        this.taskInput.addEventListener('input', () => this.newTask.update(this.taskInput.value));
        this.taskInput.addEventListener('blur', () => this.commitTaskViaBlur(this.taskInput));
    }

    configureForm(form) {
        form.addEventListener('submit', (e) => this.commitTaskViaSubmit(this.taskInput, e));
        form.addEventListener('reset', () => {if (typeof this.newTask !== "undefined") this.newTask.publishTaskDeletion()});
    }

    render(date) {

        let tasksList = this.renderTasks(date);

        this.createInput();
        this.configureInput(date, tasksList);

        // this.assembleForm();
        this.form.assemble(this.taskInput);
        this.todoList.innerHTML = '';

        this.todoList.appendChild(this.form.taskForm);
        if (tasksList.childNodes.length > 0)
            this.todoList.appendChild(this.selectAll);
        this.todoList.appendChild(tasksList);

        this.container.innerHTML = '';
        this.container.appendChild(this.todoList);
    }
}

export default ToDoList;
