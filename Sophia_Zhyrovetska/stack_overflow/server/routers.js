const path = require("path");
const getRouter = require("./getRouter");

const questionsListJson = path.resolve(
  __dirname,
  "../",
  "src",
  "components",
  "QuestionPost",
  "data.json"
);
const usersJson = path.resolve(
  __dirname,
  "../",
  "src",
  "components",
  "UserInfo",
  "data.json"
);
const blogBlockJson = path.resolve(
  __dirname,
  "../",
  "src",
  "components",
  "BlogBlock",
  "data.json"
);
const featuredTagsWatchedJson = path.resolve(
  __dirname,
  "../",
  "src",
  "components",
  "FeaturedTagsBlock",
  "dataWatched.json"
);
const featuredTagsIgnoredJson = path.resolve(
  __dirname,
  "../",
  "src",
  "components",
  "FeaturedTagsBlock",
  "dataIgnored.json"
);
const hotNetworkQuestionsJson = path.resolve(
  __dirname,
  "../",
  "src",
  "components",
  "HotNetworkQuestions",
  "data.json"
);

const questionsListRouter = getRouter(questionsListJson);
const usersRouter = getRouter(usersJson);
const blogBlockRouter = getRouter(blogBlockJson);
const featuredTagsWatchedRouter = getRouter(featuredTagsWatchedJson);
const featuredTagsIgnoredRouter = getRouter(featuredTagsIgnoredJson);
const hotNetworkQuestionsRouter = getRouter(hotNetworkQuestionsJson);

module.exports.questionsListRouter = questionsListRouter;
module.exports.usersRouter = usersRouter;
module.exports.blogBlockRouter = blogBlockRouter;
module.exports.featuredTagsWatchedRouter = featuredTagsWatchedRouter;
module.exports.featuredTagsIgnoredRouter = featuredTagsIgnoredRouter;
module.exports.hotNetworkQuestionsRouter = hotNetworkQuestionsRouter;
