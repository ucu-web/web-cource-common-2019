import UserInfo from "./components/UserInfo/UserInfo";
import { initUsersHandlers } from "./js/filterUsers";
const render = async (containerClass, path, htmlElementGenerator) => {
  const container = document.querySelector(containerClass);
  const data = await (await fetch(path)).json();

  data.map(element => container.appendChild(htmlElementGenerator(element)));
  sessionStorage.setItem(
    containerClass,
    document.querySelector(containerClass).innerHTML
  );
};

const savedUsers = sessionStorage.getItem(".Users-list");
const savedButtonGroupState = sessionStorage.getItem("buttonGroupUsers");
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
