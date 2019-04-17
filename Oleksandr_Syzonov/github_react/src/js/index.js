import {htmlToElement} from "./helper_functions";

function createFile(filename, date, commit_message) {
    return htmlToElement(`<article class="File">
                <img alt="" class="File__icon" src="icons/directory.svg">
                <h4 class="File__filename"><a class="File__link" href="#">${filename}</a></h4>
                <p class="File__description">${commit_message} </p>
                <time class="File__edited">${date}</time>
            </article>`);
}


for (let i = 0; i < 38; i++) {
    document.getElementsByClassName("Repository__files")[0].appendChild(createFile('very_important.txt', '17-04-2019', 'Cool  commmit message'));
}