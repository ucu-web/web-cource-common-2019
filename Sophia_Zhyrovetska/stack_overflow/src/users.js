import UserInfo from "./components/UserInfo/UserInfo";

const RenderUsersList = async () => {
  const userContainer = document.querySelector(".Users-list");
  const data = await (await fetch("src/components/UserInfo/data.json")).json();

  data.map(user => userContainer.appendChild(UserInfo(user)));
};

RenderUsersList();
