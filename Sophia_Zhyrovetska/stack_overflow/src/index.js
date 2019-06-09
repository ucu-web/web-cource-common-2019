import QuestionPost from "./components/QuestionPost";
import { FeaturedTagsBlock } from "./components/FeaturedTagsBlock";
import HotNetworkQuestions from "./components/HotNetworkQuestions";
import BlogBlock from "./components/BlogBlock";
import { render } from "./helpers/library";
import { initQuestionsTypesHandlers } from "./js/filterQuestions";
import { editTagsBlock } from "./js/editTagsBlock";

render(
  document,
  ".Questions-list",
  "api/questions",
  QuestionPost
).catch(err => console.log(err));
render(
  document,
  ".Featured-tags-block__content--watched",
  "api/watched_tags",
  FeaturedTagsBlock
).catch(err => console.log(err));
render(
  document,
  ".Featured-tags-block__content--ignored",
  "api/ignored_tags",
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

editTagsBlock(watchedTags, "watched", "/api/watched_tags");
editTagsBlock(ignoredTags, "ignored", "/api/ignored_tags");
