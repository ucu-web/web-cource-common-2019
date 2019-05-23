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

const render = async (containerClass, path, htmlElementCreator) => {
    const container = document.querySelector(containerClass);
    const data = await (await fetch(path)).json();

    data.map(element => container.appendChild(htmlElementCreator(element)));
};

render(".News-Container", "friendsRepository", friendsRepository);
render(".Sidebar__block-container", "recommendedRepository", recommendedRepository);
