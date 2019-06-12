import PubSub from './PubSub'

class ToDoTask {
    constructor(task) {
        this.task = task;

        this.taskCheckBox = document.createElement("input");
        this.taskCheckBox.className = 'todolist__task_checkbox';
        this.taskCheckBox.type = 'checkbox';

        this.taskElement = document.createElement("li");
        this.taskElement.className = 'todolist__task';
        this.taskElement.addEventListener('click', () => {this.taskCheckBox.checked = !this.taskCheckBox.checked; this.taskCheckBox.click()});
        this.taskCheckBox.addEventListener('click', () => this.taskElement.toggleAttribute('chosen'));

        this.taskInfo = document.createElement('span');
        this.taskInfo.className = 'todolist__task_info';

        this.deleteTaskButton = document.createElement('button');
        this.deleteTaskButton.className = 'todolist__task_deletion';

        this.onTaskDeletionPubSub = new PubSub();
    }

    onTaskDeletion(callback) {
        this.onTaskDeletionPubSub.subscribe(callback);
    }

    publishTaskDeletion() {
        this.onTaskDeletionPubSub.publish();
    }

    update(newTask) {
        this.task = newTask;
        this.taskInfo.innerText = this.task;
    }

    getValue() {
        return this.task;
    }

    render(container) {
        this.taskInfo.innerText = this.task;
        this.deleteTaskButton.innerHTML = '+';
        this.deleteTaskButton.addEventListener('click', () => this.publishTaskDeletion());
        this.taskElement.appendChild(this.taskCheckBox);
        this.taskElement.appendChild(this.taskInfo);
        this.taskElement.appendChild(this.deleteTaskButton);
        container.appendChild(this.taskElement);
    }
}

export default ToDoTask;