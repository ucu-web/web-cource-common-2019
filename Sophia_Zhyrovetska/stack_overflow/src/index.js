import QuestionPost from "./components/QuestionPost";
import { FeaturedTagsBlock } from "./components/FeaturedTagsBlock";
import HotNetworkQuestions from "./components/HotNetworkQuestions";
import BlogBlock from "./components/BlogBlock";
import { render } from "./helpers/library";
import { initQuestionsTypesHandlers } from "./js/filterQuestions";
import { editTagsBlock } from "./js/editTagsBlock";

const savedQuestions = localStorage.getItem(".Questions-list");
const savedButtonGroupState = localStorage.getItem("buttonGroup");
if (savedQuestions && savedButtonGroupState){
    document.querySelector(".Questions-list").innerHTML = savedQuestions;
    document.getElementsByClassName("Button-group")[0].innerHTML = savedButtonGroupState;
} else {
    render(
        document,
        ".Questions-list",
        "api/questions",
        QuestionPost
    ).catch(err => console.log(err));
    document.querySelector(".Button-group__button--interesting").classList.add(".Button-group__button--current")
}
render(
  document,
  ".Featured-tags-block__content--watched",
  "api/users/1/watched_tags",
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
  "/api/hot_network_questions",
  HotNetworkQuestions
).catch(err => console.log(err));
render(
  document,
  ".Blog-block",
  "/api/blog",
  BlogBlock
).catch(err => console.log(err));
initQuestionsTypesHandlers();
const watchedTags = document.querySelectorAll(".Featured-tags-block")[0];
const ignoredTags = document.querySelectorAll(".Featured-tags-block")[1];

editTagsBlock(watchedTags, "watched", "/api/users/1");
editTagsBlock(ignoredTags, "ignored", "/api/users/1");
