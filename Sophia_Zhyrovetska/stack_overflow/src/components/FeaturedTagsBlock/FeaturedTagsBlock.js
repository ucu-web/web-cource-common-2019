import "./Featured-tags-block.less";
import BEM from "../../helpers/BEM";
const b = BEM("Featured-tags-block");

const FeaturedTagsBlock = data => {
  const rootEl = document.createElement("a");
  rootEl.className = b("tag") + " Tag";

  rootEl.innerHTML = `
  <span class="Tag__name">${data.name}</span>
  <span class= "Tag__delete-tag" title="Remove tag"></span>
`;

  return rootEl;
};

const FeaturedTagsBlockDeleteVisible = data => {
  const rootEl = document.createElement("a");
  rootEl.className = b("tag") + " Tag";

  rootEl.innerHTML = `
  <span class="Tag__name">${data.name}</span>
  <span class= "Tag__delete-tag Tag__delete-tag--visible" title="Remove tag"></span>
`;

  return rootEl;
};

export { FeaturedTagsBlock, FeaturedTagsBlockDeleteVisible };
