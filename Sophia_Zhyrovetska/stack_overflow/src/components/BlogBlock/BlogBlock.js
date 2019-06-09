import "./Blog-block.less";
import BEM from "../../helpers/BEM";

const b = BEM("Blog-block");

const BlogBlock = ({ title, questions }) => {
  const rootEl = document.createElement("div");

  rootEl.innerHTML = `
      <div class="${b("cell")} ${b("cell--title")}">
        <h4 class="${b("title")}">${title}</h4>
      </div>
      
      ${questions
        .map(
          ({ icon, link }) => `
            <div class="${b("cell")}">
              <a href="#" class="${b("icon")}">
                <div aria-label="Meta Stack Exchange" class="Favicon Favicon--${icon}"></div>
              </a>
              <a href="#" class="Ordinary-link ${b("link")}">${link}</a>
            </div>
            `
        )
        .join("")}
    `;

  return rootEl;
};
export default BlogBlock;
