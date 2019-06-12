import BEM from "../helpers/BEM";
import PubSub from "pubsub-js";
import { addTag } from "./addTag";
import { FeaturedTagsBlockDeleteVisible } from "../components/FeaturedTagsBlock";
import { deleteTag } from "./deleteTag";
import { delegateEvent } from "../helpers/library";

const editTagsBlock = (node, TOPIC, userURL) => {
  const b = BEM(node.classList[0]);


  PubSub.subscribe(TOPIC, (msg, data) => {
    let isWatchedTags;
    TOPIC === "watched" ? isWatchedTags = true: isWatchedTags = false;
    const tagsDeleteButtons = node.getElementsByClassName("Tag__delete-tag");
    Array.from(tagsDeleteButtons).map(button =>
      button.classList.add("Tag__delete-tag--visible")
    );

    let form = document.createElement("form");
    form.classList.add("Search-form", "Featured-tags-block__form");
    form.innerHTML = ` <input type="text" class="Search-form__input-field">
                  <button type="submit" class="Primary-button Primary-button--blue Primary-button--overlap">Add</button>`;
    node.appendChild(form);

    addTag(
      node,
      "." + b("content"),
      FeaturedTagsBlockDeleteVisible,
      form,
      userURL,
        isWatchedTags
    );

    const editButton = node.querySelector("." + b("edit"));
    editButton.style.display = "none";

    deleteTag(node, "." + b("content"), FeaturedTagsBlockDeleteVisible, userURL, isWatchedTags);

    document.addEventListener("click", ev => {
      let target = ev.target;
      let clickInside = false;
      while (target !== document) {
        if (target === node) {
          clickInside = true;
          break;
        }
        target = target.parentNode;
      }
      if (!clickInside) {
        editButton.style.display = "inline";
        console.log(node.querySelector("."+b("form")));
        node.removeChild(node.querySelector("."+b("form")));
        Array.from(tagsDeleteButtons).map(button =>
          button.classList.remove("Tag__delete-tag--visible")
        );
      }
    });
  });
  delegateEvent(node, "." + b("edit"), "click", ev => {
    PubSub.publish(TOPIC, "edit");
  });
};

export { editTagsBlock };
