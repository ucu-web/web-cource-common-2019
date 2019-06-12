import {
  isDateCloseToCurrent,
  render,
  delegateEvent,
  buttonGroupChangeState
} from "../helpers/library";
import UserInfo from "../components/UserInfo/UserInfo";


const nav = document.getElementsByClassName("Button-group")[0];
const form = document.getElementsByClassName("Filter-users__search-form")[0];
const buttonsSelectors = [
  ".Button-group__button--reputation",
  ".Button-group__button--new-users",
  ".Button-group__button--voters",
  ".Button-group__button--editors",
  ".Button-group__button--moderators"
];
const switchUserFilter = (buttonName) =>{
  if (buttonName === "reputation") {
    render(document, ".Users-list", "/api/users", UserInfo, true).catch(err =>
        console.log(err)
    );
    buttonGroupChangeState(
        nav,
        ".Button-group__button--reputation",
        buttonsSelectors,
        "Button-group__button--current"
    );
    localStorage.setItem("buttonGroupUsers", nav.innerHTML);
  }

  if (buttonName === "new-users") {
    render(document, ".Users-list", "/api/users", UserInfo, true, element => {
      return isDateCloseToCurrent(element, 30);
    }).catch(err => console.log(err));
    buttonGroupChangeState(
        nav,
        ".Button-group__button--new-users",
        buttonsSelectors,
        "Button-group__button--current"
    );
    localStorage.setItem("buttonGroupUsers", nav.innerHTML);
  }

  if (buttonName === "voters") {
    render(document, ".Users-list", "/api/users", UserInfo, true, element => {
      return element.votes > 10;
    }).catch(err => console.log(err));
    buttonGroupChangeState(
        nav,
        ".Button-group__button--voters",
        buttonsSelectors,
        "Button-group__button--current"
    );
    localStorage.setItem("buttonGroupUsers", nav.innerHTML);
  }
  if (buttonName === "editors") {
    render(document, ".Users-list", "/api/users", UserInfo, true, element => {
      return element.edits > 10;
    }).catch(err => console.log(err));
    buttonGroupChangeState(
        nav,
        ".Button-group__button--editors",
        buttonsSelectors,
        "Button-group__button--current"
    );
    localStorage.setItem("buttonGroupUsers", nav.innerHTML);
  }
  if (buttonName === "moderators") {
    render(document, ".Users-list", "/api/users", UserInfo, true, element => {
      return element.moderator;
    }).catch(err => console.log(err));
    buttonGroupChangeState(
        nav,
        ".Button-group__button--moderators",
        buttonsSelectors,
        "Button-group__button--current"
    );
    localStorage.setItem("buttonGroupUsers", nav.innerHTML);
  }
};
const initUsersHandlers = () => {
  nav.addEventListener("click", ev => {
    let buttonName;
    if (ev.target.matches(".Button-group__button--reputation")) {
      buttonName = "reputation";
      switchUserFilter(buttonName);
      history.pushState(buttonName,buttonName,buttonName);
    }

    if (ev.target.matches(".Button-group__button--new-users")) {
      buttonName = "new-users";
      switchUserFilter(buttonName);
      history.pushState(buttonName,buttonName,buttonName);
      localStorage.setItem("buttonGroupUsers", nav.innerHTML);
    }

    if (ev.target.matches(".Button-group__button--voters")) {
      buttonName = "voters";
      switchUserFilter(buttonName);
      history.pushState(buttonName,buttonName,buttonName);
    }
    if (ev.target.matches(".Button-group__button--editors")) {
      buttonName = "editors";
      switchUserFilter(buttonName);
      history.pushState(buttonName,buttonName,buttonName);
    }
    if (ev.target.matches(".Button-group__button--moderators")) {
      buttonName = "moderators";
      switchUserFilter(buttonName);
      history.pushState(buttonName,buttonName,buttonName);
    }
  });
};

form.addEventListener("submit", ev => {
  ev.preventDefault();
  let value = document.getElementsByClassName("Search-form__input-field")[1]
    .value;
  render(document, ".Users-list", "/api/users", UserInfo, true, element => {
    return element.name.toLowerCase().includes(value.toLocaleLowerCase());
  }).catch(err => console.log(err));
  form.reset();
});

export { initUsersHandlers, switchUserFilter };
