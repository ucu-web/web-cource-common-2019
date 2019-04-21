import QuestionPost from "./components/QuestionPost";
import FeaturedTagsBlock from "./components/FeaturedTagsBlock";

const RenderQuestionList = async () => {
  const questionContainer = document.querySelector(".Questions-list");
  const data = await (await fetch(
    "src/components/QuestionPost/data.json"
  )).json();

  data.map(question => questionContainer.appendChild(QuestionPost(question)));
};

const RenderFeaturedTagsBlocks = async () => {
  const blockContainer = document.querySelector(".Tags-blocks");
  const data = await (await fetch(
      "src/components/FeaturedTagsBlock/data.json"
  )).json();
  data.map(block => blockContainer.appendChild(FeaturedTagsBlock(block)));
};

RenderQuestionList();
RenderFeaturedTagsBlocks();

