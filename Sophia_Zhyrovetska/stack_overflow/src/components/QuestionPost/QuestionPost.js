import "./Question-post.less";
import BEM from "../../helpers/BEM";
const b = BEM("Question-post");

const QuestionPost = data => {
  const rootEl = document.createElement("article");
  rootEl.className = b({ "tagged-interesting": data.tagged });

  rootEl.innerHTML = `
    <section class="${b("summary")}" >
      <h3 class="${b("title")}">
        <a href="#" class="Ordinary-link"
          >${data.question}</a
        >
      </h3>
      <div class=" ${b("tags")}">
        ${data.tags
          .map(tag => `<a href="#" class="Tag ${b("tag")}">${tag}</a>`)
          .join("")}
      </div>
      <footer class=" ${b("started")}">
        <a href="#" class=" ${b("started-link")}"
          >asked
          <time datetime="${data.year}-${data.month}-${data.day}">${
    data.year
  }-${data.month}-${data.day}</time>
        </a>
        <a href="#" rel="author" class="Ordinary-link">${data.author}</a>
        <span
          class="${b("author-reputation-score")}"
          title="reputation score"
          >${data.score}</span>
      </footer>
    </section>

    <section class="${b("reaction")}">
      <div class="${b(
        "counter"
      )} Question-reaction-counter Question-reaction-counter--votes">
        <span class="Question-reaction-counter__number" title="0 votes">
            ${data.votes}
        </span>
        <span>votes</span>
      </div>
      <div
        class="${b(
          "counter"
        )} Question-reaction-counter Question-reaction-counter--answers Question-reaction-counter--answers--has-no-answer"
      >
        <span
          class="Question-reaction-counter__number"
          title="${data.answers} answers"
          >${data.answers}</span
        >
        <span>answers</span>
      </div>
      <div
        class="${b(
          "counter"
        )} Question-reaction-counter Question-reaction-counter--views"
      >
        <span class="Question-reaction-counter__number" title="${
          data.views
        } views"
          >${data.views}</span
        >
        <span>views</span>
      </div>
    </section>
`;

  return rootEl;
};

export default QuestionPost;
