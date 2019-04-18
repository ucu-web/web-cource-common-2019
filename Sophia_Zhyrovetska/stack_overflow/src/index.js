import QuestionPost from "./components/QuestionPost";

const RenderQuestionList = async () => {
  const questionContainer = document.querySelector(".Questions-list");
  const data = await (await fetch(
    "src/components/QuestionPost/data.json"
  )).json();

  data.map(question => questionContainer.appendChild(QuestionPost(question)));
};

RenderQuestionList();
