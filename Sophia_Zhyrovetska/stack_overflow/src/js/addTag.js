import { renderLastElement } from "../helpers/library";
const sanitizeHtml = require("sanitize-html");

const addTag = (
  parentNode,
  containerClass,
  htmlElementGenerator,
  form,
  userURL,
  isWatchedTags
) => {
  form.addEventListener("submit", async ev => {
    ev.preventDefault();
    let value = sanitizeHtml(parentNode.getElementsByTagName("input")[0].value);
    const data = await (await fetch(userURL)).json();
    let tags;
    let tagsUrl;
    if(isWatchedTags){
      tags = data.watched_tags;
      tagsUrl = userURL + "/watched_tags";
    }else{
      tags = data.ignored_tags;
      tagsUrl = userURL + "/ignored_tags";
    }
    const isValueRepeated =
      tags.filter(tag => {
        return tag === value;
      }).length > 0;
    if (value && !isValueRepeated) {
      isWatchedTags ? data.watched_tags.push(value):data.ignored_tags.push(value);
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
          renderLastElement(
            parentNode,
            containerClass,
              tagsUrl,
            htmlElementGenerator
          ).catch(err => console.log(err))
        );
    }
    form.reset();
  });
};
export { addTag };
