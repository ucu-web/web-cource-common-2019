import QuestionPost from "./components/QuestionPost";
import FeaturedTagsBlock from "./components/FeaturedTagsBlock";
import HotNetworkQuestions from "./components/HotNetworkQuestions";
import CommunityBulletin from "./components/CommunityBulletin";

const render = async (containerClass, path, htmlElementGenerator) => {
  const container = document.querySelector(containerClass);
  const data = await (await fetch(path)).json();

  data.map(element => container.appendChild(htmlElementGenerator(element)));
};

render(".Questions-list", "src/components/QuestionPost/data.json", QuestionPost);
render(".Tags-blocks", "src/components/FeaturedTagsBlock/data.json", FeaturedTagsBlock);
render(".Hot-network-questions__list", "src/components/HotNetworkQuestions/data.json", HotNetworkQuestions);
render(".Community-bulletin", "src/components/CommunityBulletin/data.json", CommunityBulletin);
