import QuestionPost from "./components/QuestionPost";
import { FeaturedTagsBlock } from "./components/FeaturedTagsBlock";
import HotNetworkQuestions from "./components/HotNetworkQuestions";
import BlogBlock from "./components/BlogBlock";
import { render } from "./helpers/library";
import {initQuestionsTypesHandlers, switchFilter} from "./js/filterQuestions";
import { editTagsBlock } from "./js/editTagsBlock";

const savedQuestions = localStorage.getItem(".Questions-list");
const savedButtonGroupState = localStorage.getItem("buttonGroup");
const currentUserID = 1;
if (savedQuestions && savedButtonGroupState) {
  document.querySelector(".Questions-list").innerHTML = savedQuestions;
  document.getElementsByClassName(
    "Button-group"
  )[0].innerHTML = savedButtonGroupState;
} else {
  render(document, ".Questions-list", "api/questions", QuestionPost).catch(
    err => console.log(err)
  );
  document
    .querySelector(".Button-group__button--interesting")
    .classList.add("Button-group__button--current");
}
render(
  document,
  ".Featured-tags-block__content--watched",
  "api/users/"+ currentUserID + "/watched_tags",
  FeaturedTagsBlock
).catch(err => console.log(err));
render(
  document,
  ".Featured-tags-block__content--ignored",
  "api/users/1/ignored_tags",
  FeaturedTagsBlock
).catch(err => console.log(err));
render(
  document,
  ".Hot-network-questions__list",
  "/api/questions/?hot=true",
  HotNetworkQuestions
).catch(err => console.log(err));
render(document, ".Blog-block", "/api/blog", BlogBlock).catch(err =>
  console.log(err)
);
initQuestionsTypesHandlers();
const watchedTags = document.querySelectorAll(".Featured-tags-block")[0];
const ignoredTags = document.querySelectorAll(".Featured-tags-block")[1];

editTagsBlock(watchedTags, "watched", "/api/users/" + currentUserID);
editTagsBlock(ignoredTags, "ignored", "/api/users/" + currentUserID);

window.onpopstate = function(event) {
  let buttonName = JSON.stringify(event.state);
  switchFilter(buttonName.substring(1, buttonName.length-1));
};
