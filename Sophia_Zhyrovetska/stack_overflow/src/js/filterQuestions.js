import { isDateCloseToCurrent, render, buttonGroupChangeState } from "../helpers/library";
import QuestionPost from "./../components/QuestionPost";

const nav = document.getElementsByClassName("Button-group")[0];
const buttonsSelectors = [".Button-group__button--interesting", ".Button-group__button--featured",".Button-group__button--hot", ".Button-group__button--week", ".Button-group__button--month"];
const initQuestionsTypesHandlers = () => {
  nav.addEventListener("click", ev => {
    if (ev.target.matches(".Button-group__button--interesting")) {
      render(
        document,
        ".Questions-list",
        "/api/questions",
        QuestionPost,
        true
      ).catch(err => console.log(err));
      buttonGroupChangeState(nav, ".Button-group__button--interesting",buttonsSelectors,"Button-group__button--current" );
      localStorage.setItem("buttonGroup", nav.innerHTML);
    }


    if (ev.target.matches(".Button-group__button--featured")) {
      render(
        document,
        ".Questions-list",
        "/api/questions",
        QuestionPost,
        true,
        element => {
          return element.featured > 0;
        }
      ).catch(err => console.log(err));
      buttonGroupChangeState(nav, ".Button-group__button--featured",buttonsSelectors,"Button-group__button--current" );
      localStorage.setItem("buttonGroup", nav.innerHTML);
    }

    if (ev.target.matches(".Button-group__button--hot")) {
      render(
        document,
        ".Questions-list",
        "/api/questions",
        QuestionPost,
        true,
        element => {
          return isDateCloseToCurrent(element, 2) && element.views > 100;
        }
      ).catch(err => console.log(err));
      buttonGroupChangeState(nav, ".Button-group__button--hot",buttonsSelectors,"Button-group__button--current" );
      localStorage.setItem("buttonGroup", nav.innerHTML);
    }
    if (ev.target.matches(".Button-group__button--week")) {
      render(
        document,
        ".Questions-list",
        "/api/questions",
        QuestionPost,
        true,
        element => {
          return isDateCloseToCurrent(element, 6) && element.views > 100;
        }
      ).catch(err => console.log(err));
      buttonGroupChangeState(nav, ".Button-group__button--week",buttonsSelectors,"Button-group__button--current" );
      localStorage.setItem("buttonGroup", nav.innerHTML);
    }
    if (ev.target.matches(".Button-group__button--month")) {
      render(
        document,
        ".Questions-list",
        "/api/questions",
        QuestionPost,
        true,
        element => {
          return isDateCloseToCurrent(element, 30) && element.views > 100;
        }
      ).catch(err => console.log(err));
      buttonGroupChangeState(nav, ".Button-group__button--month",buttonsSelectors,"Button-group__button--current" );
      localStorage.setItem("buttonGroup", nav.innerHTML);
    }
  });

};

export { initQuestionsTypesHandlers };
