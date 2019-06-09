import BEM from "../../helpers/BEM";
import "../../styles/File.less";

const b = BEM("File");

export const File = data => {
  const rootEl = document.createElement("article");
  rootEl.setAttribute("_id", data.id);
  const icon_path = data.is_directory
    ? "../icons/directory.svg"
    : "../icons/file.svg";
  rootEl.className = b();
  rootEl.innerHTML = `<img alt="" class="File__icon" src="${icon_path}">
    <h4 class="File__filename"><a class="File__link" href="#">${
      data["name"]
    }</a></h4>
    <p class="File__description">${data["latest_commit_text"]} </p>
    <time class="File__edited">${data["latest_commit_time"]}</time>`;
  return rootEl;
};
export const EmtyFile = () => {
  const rootEl = document.createElement("article");
  rootEl.className = b(["previous"]);
  rootEl.innerHTML = `<img alt="" class="File__icon" src="../icons/directory.svg">
    <h4 class="File__filename"><a class="File__link" href="#">...</a></h4>
    <p class="File__description"></p>
    <time class="File__edited"></time>`;
  rootEl.querySelector(".File__icon").style.visibility = "hidden";
  return rootEl;
};

export default File;
