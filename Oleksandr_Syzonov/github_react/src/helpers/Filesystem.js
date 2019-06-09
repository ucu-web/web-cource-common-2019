import { Node } from "./TreeNodes";
import { File, EmtyFile } from "../components/File/File";
import { map, filter } from "ramda";

function jsonCopy(src) {
  return JSON.parse(JSON.stringify(src));
}
////1)Отримуємо адресу попередньої директорії
////2)Переходимо
////
export class Filesystem {
  constructor(fileTree, container) {
    this.tree = fileTree;
    this.current = this.tree;
    this.container = container;
    this.renderCurrent();
    this.initHandles();
    console.log(this.tree);
  }
  renderCurrent() {
    this.container.innerHTML = "";
    map(x => {
      this.container.appendChild(File(x.value));
    }, this.current.children);
  }
  setCurrentById(id) {
    //First place ------------------>
    this.current = filter(
      x => x.value.id === id,
      this.current.children
    )[0].clone();
  }
  getById(id) {
    return filter(x => x.value.id === id, this.current.children)[0].clone();
  }
  goToDirectory(id) {
    this.setCurrentById(id);
    this.renderCurrent();
    this.container.insertBefore(EmtyFile(), this.container.firstChild);
    document.addEventListener("click", evt => {
      if (evt.target.matches(".File--previous, .File--previous *")) {
        this.goToParentDirectory();
      }
    });
    console.log(this.getCurrentPath());
  }
  goToParentDirectory() {
    console.log(this.current.parent);
    this.current = this.current.parent.clone();
    this.renderCurrent();
  }
  getCurrentPath() {
    let path = "";
    let cur = this.current.clone();
    while (cur.parent !== null) {
      path += `/${cur.value.name}`;
      cur = cur.parent.clone();
    }
    return path;
  }
  initHandles() {
    document.addEventListener("click", evt => {
      let file;
      if (
        (evt.target.matches(".File__filename") ||
          evt.target.parentNode.matches(".File__filename")) &
        !evt.target.matches(".File--previous, .File--previous *")
      ) {
        if (evt.target.matches(".File__filename")) {
          file = evt.target.parentNode;
        } else if (evt.target.parentNode.matches(".File__filename")) {
          file = evt.target.parentNode.parentNode;
        }
        const fileId = parseInt(file.getAttribute("_id"));
        if (this.getById(fileId).value["is_directory"]) {
          this.goToDirectory(fileId);
        }
      }
    });
  }
}
