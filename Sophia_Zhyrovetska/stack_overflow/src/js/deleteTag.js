import {render, delegateEvent, renderLastElement} from "../helpers/library";

const getTagValue = tagNode => {
  return tagNode.querySelector(".Tag__name").innerHTML;
};

const deleteTag = (node, containerClass, htmlElementGenerator, userURL, isWatchedTags) => {
  delegateEvent(node, ".Tag__delete-tag", "click", async ev => {
    ev.preventDefault();
    const value = getTagValue(ev.target.parentNode);
    const data = await (await fetch(userURL)).json();
    let tagsURL;
    if (isWatchedTags) {
      data.watched_tags = data.watched_tags.filter((tag) =>{return tag !== value});
      tagsURL = userURL + "/watched_tags"
    } else {
      data.ignored_tags = data.ignored_tags.filter((tag) =>{return tag !== value});
      tagsURL = userURL + "/ignored_tags";
    }

    fetch("/api/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(obj =>
            node.querySelector(containerClass).removeChild(ev.target.parentNode)
        );
  })
};

export { deleteTag };
