import QuestionPost from "./components/QuestionPost";
import FeaturedTagsBlock from "./components/FeaturedTagsBlock";
import HotNetworkQuestions from "./components/HotNetworkQuestions"
import CommunityBulletin from "./components/CommunityBulletin"

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

const RenderHotNetworkQuestions = async () => {
  const blockContainer = document.querySelector(".Hot-network-questions__list");
  const data = await (await fetch(
      "src/components/HotNetworkQuestions/data.json"
  )).json();
  data.map(question => blockContainer.appendChild(HotNetworkQuestions(question)));
};

const RenderCommunityBulletin = async () => {
  const blockContainer = document.querySelector(".Community-bulletin");
  const data = await (await fetch(
      "src/components/CommunityBulletin/data.json"
  )).json();

  data.map(block => blockContainer.appendChild(CommunityBulletin(block)));
};

RenderQuestionList();
RenderFeaturedTagsBlocks();
RenderHotNetworkQuestions();
RenderCommunityBulletin();