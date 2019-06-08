import './styles/body-styles.scss';
import './styles/Header.scss';
import './styles/General-navigation.scss';
import './styles/Profile-navigation.scss';
import './styles/Layout.scss';
import './styles/News.scss';
import './styles/Project.scss';
import './styles/Sidebar.scss';
import './styles/Repository-block.scss';
import './styles/Subscribing.scss';
import './styles/Footer.scss';
import './styles/Account.scss';
import './styles/Repository-navigation.scss';

import {friendsRepository, recommendedRepository} from './htmlGenerator'

const generateData = async () => {
    const user = await (await fetch("api/users/1")).json();
    const repositories = await (await fetch("api/users/1/repositories")).json();

    const container1 = document.querySelector(".News-Container");
    const container2 = document.querySelector(".Sidebar__block-container");

    repositories.map(element => container1.appendChild(friendsRepository(user, element)));
    repositories.map(element => container2.appendChild(recommendedRepository(user, element)));
};

generateData();
