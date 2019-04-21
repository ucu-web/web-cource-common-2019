import "./Hot-network-questions.less";
import BEM from "../../helpers/BEM";
const b = BEM("Hot-network-questions");

const HotNetworkQuestions = data => {
  const rootEl = document.createElement("li");
  rootEl.className = b("question");

  rootEl.innerHTML = `
      <div
              class="Favicon Favicon--${data.icon} ${b("icon")}"
              title="The Workplace Stack Exchange"
      ></div>
      <a
              href="#"
              class="Ordinary-link ${b("question-link")}"
      >${data.question}</a
      >
`;

  return rootEl;
};

export default HotNetworkQuestions;
