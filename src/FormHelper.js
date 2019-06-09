export function CreateForm(name) {
    let taskForm = document.createElement('form');
    taskForm.className = name + '__form';

    return taskForm;
}
export function CreateInput(type, parentName, value='') {
    let inputElement = document.createElement('input');
    inputElement.className = parentName + '__' + value.toLowerCase();
    inputElement.type = type;
    inputElement.value = value;
    return inputElement;
}

export function ConfigureForm(form) {

}

export function AssembleForm(form, elements = []) {
    form.innerHTML = '';
    elements.forEach(elem => form.appendChild(elem));
}
