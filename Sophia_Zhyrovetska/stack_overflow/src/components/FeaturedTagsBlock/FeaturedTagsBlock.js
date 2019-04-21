import "./Featured-tags-block.less";
import BEM from "../../helpers/BEM";
const b = BEM("Featured-tags-block");

const FeaturedTagsBlock = data => {
  const rootEl = document.createElement("section");
  rootEl.className = "Featured-tags-block Aside-panel__item";

  rootEl.innerHTML = `
  <header class="${b("header")}">
            <span class="${b("icon")}">
              <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
              >
                <path
                        d="${data.iconPath}"
                ></path>
              </svg>
            </span>
    <h3 class="${b("title")}">${data.title}</h3>
    <a href="#" class="${b("edit")}">edit</a>
  </header>
  <div class="${b("content")}">
  ${data.tags
    .map(tag => `<a href="#" class="Tag ${b("tag")}" title="show questions tagged '${tag}'">${tag}</a>`)
    .join("")}
  </div>
`;

  return rootEl;
};
export default FeaturedTagsBlock;
