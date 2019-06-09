import UserInfo from "./components/UserInfo/UserInfo";
import { initUsersHandlers } from "./js/filterUsers";
import { delegateEvent } from "./helpers/library";
const render = async (containerClass, path, htmlElementGenerator) => {
  const container = document.querySelector(containerClass);
  const data = await (await fetch(path)).json();

  data.map(element => container.appendChild(htmlElementGenerator(element)));
};

render(".Users-list", "http://localhost:5000/api/users", UserInfo).catch(err =>
  console.log(err)
);
initUsersHandlers();
