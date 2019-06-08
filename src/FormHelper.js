function CreateSimpleForm(name) {
    let taskForm = document.createElement('form');
    taskForm.className = name + '__form';

    let taskSave = document.createElement('input');
    taskSave.className = name + '__save';
    taskSave.type = 'submit';
    taskSave.value = 'Save';

    let taskCancel = document.createElement('input');
    taskCancel.className = name + '__cancel';
    taskCancel.type = 'reset';
    taskCancel.value = 'Cancel';

    return taskForm;
}

function ConfigureForm(form) {

}

function AssembleForm(form, elements = []) {
    form.innerHTML = '';
    elements.forEach(elem => form.appendChild(elem));
}


export default {CreateSimpleForm, AssembleForm, ConfigureForm};
