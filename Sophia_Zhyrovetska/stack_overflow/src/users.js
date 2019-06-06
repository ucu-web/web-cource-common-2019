import UserInfo from "./components/UserInfo/UserInfo";

const render = async (containerClass, path, htmlElementGenerator) => {
  const container = document.querySelector(containerClass);
  const data = await (await fetch(path)).json();

  data.map(element => container.appendChild(htmlElementGenerator(element)));
};

render(".Users-list", "http://localhost:5000/users", UserInfo).catch((err) => console.log(err));
