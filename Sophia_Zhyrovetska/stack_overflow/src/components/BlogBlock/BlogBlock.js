import "./Blog-block.less";
import BEM from "../../helpers/BEM";
const b = BEM("Blog-block");

const BlogBlock = data => {
  const rootEl = document.createElement("div");

  rootEl.innerHTML = `
  <div class="${b("cell")} ${b("cell--title")}">
      <h4 class="${b("title")}">${data.title}</h4>
  </div>
  ${data.questions
    .map(
      question =>
        `<div class="${b("cell")}"><a href="#" class="${b(
          "icon"
        )}"><div aria-label="Meta Stack Exchange" class="Favicon Favicon--${
          question.icon
        }"></div></a><a href="#" class="Ordinary-link ${b("link")}">${
          question.link
        }</a></div>`
    )
    .join("")}
`;

  return rootEl;
};
export default BlogBlock;
