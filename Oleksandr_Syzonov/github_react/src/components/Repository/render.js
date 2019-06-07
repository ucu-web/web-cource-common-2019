import {map} from "ramda";

const renderRepositoryDescription = (data, container) => {
    container.innerHTML += `<p class="Repository__description-text">
${data['description']}
          </p>`;
    container.querySelector(".Repository__tags")
    map((x)=> {container.querySelector(".Repository__tags").innerHTML += `<li class="Repository__tag">
              <a class="Repository__tag-link" href="#">${x}</a>
            </li>`}, data["topics"]);
};

module.exports = {
    renderRepositoryDescription : renderRepositoryDescription
};