import {map} from "ramda";

export const renderRepositoryDescription = (data, container) => {
    container.innerHTML += `<p class="Repository__description-text">
${data['description']}
          </p><ul class="Repository__tags">
          </ul>`;
    container.querySelector(".Repository__tags")
    map((x) => {
        container.querySelector(".Repository__tags").innerHTML += `<li class="Repository__tag">
              <a class="Repository__tag-link" href="#">${x}</a>
            </li>`
    }, data["topics"]);
};
export const renderRepositoryName = (data, container) => {
    let title = data['full_name'].split('/');

    container.innerHTML += `<a class="Repository-title__user-link" href="#">
                  ${title[0]}
                </a>
                /
                <a class="Repository-title__repository-link" href="#">
                  ${title[1]}
                </a>`
};

