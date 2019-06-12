import UserInfo from "./components/UserInfo/UserInfo";
import {initUsersHandlers, switchUserFilter} from "./js/filterUsers";
import {switchFilter} from "./js/filterQuestions";
const render = async (containerClass, path, htmlElementGenerator) => {
  const container = document.querySelector(containerClass);
  const data = await (await fetch(path)).json();

  data.map(element => container.appendChild(htmlElementGenerator(element)));
  localStorage.setItem(
    containerClass,
    document.querySelector(containerClass).innerHTML
  );
};

const savedUsers = localStorage.getItem(".Users-list");
const savedButtonGroupState = localStorage.getItem("buttonGroupUsers");
if (savedUsers && savedButtonGroupState) {
  document.querySelector(".Users-list").innerHTML = savedUsers;
  document.getElementsByClassName(
    "Button-group"
  )[0].innerHTML = savedButtonGroupState;
} else {
  render(".Users-list", "/api/users", UserInfo).catch(err => console.log(err));
  document
    .querySelector(".Button-group__button--reputation")
    .classList.add("Button-group__button--current");
}
initUsersHandlers();
window.onpopstate = function(event) {
  let buttonName = JSON.stringify(event.state);
  switchUserFilter(buttonName.substring(1, buttonName.length-1));
};
