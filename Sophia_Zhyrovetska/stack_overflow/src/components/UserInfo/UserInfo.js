import "./User-info.less";
import BEM from "../../helpers/BEM";
const b = BEM("User-info");

const UserInfo = data => {
  const rootEl = document.createElement("article");
  rootEl.className = b() + " Users-list__user-info";

  rootEl.innerHTML = `
        <a href="#">
          <img
            class="${b("avatar")}"
            src="${data.avatar}"
            alt="${data.name} avatar"
        /></a>
        
        <div class="${b("details")}">
          <a href="#" class="Ordinary-link ${b("name")}"
            >${data.name}</a
          >
          <span class="${b("location")}">${data.location}</span>
          <span
            class="${b("reputation-score")}"
            title="reputation this week: 2,597 total reputation: 783,741"
            >${data.score}</span
          >
        </div>
        
        <div class="${b("tags")}">
          ${data.watched_tags
            .map(tag => `<a href="#" class="${b("tag")}">${tag}</a>`)
            .join("")}
        </div>
`;

  return rootEl;
};

export default UserInfo;
