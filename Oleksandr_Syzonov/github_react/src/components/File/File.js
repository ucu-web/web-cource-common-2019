import BEM from "../../helpers/BEM";
import "./File.less";

const b = BEM("File");


export const File = data => {
    const rootEl = document.createElement("article");
    rootEl.className = b();
    rootEl.innerHTML = `<img alt="" class="File__icon" src="../icons/directory.svg">
    <h4 class="File__filename"><a class="File__link" href="#">${data["name"]}</a></h4>
    <p class="File__description">${data["latest_commit_text"]} </p>
    <time class="File__edited">${data["latest_commit_time"]}</time>`;
    return rootEl;
};

export default File;