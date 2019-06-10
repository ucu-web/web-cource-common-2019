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

import {friendsRepositoryModel, recommendedRepositoryModel} from './htmlGenerator'


const getFriendsRepositories = async (userId) => {
    const friends = await (await fetch(`api/users/${userId}/friends`)).json();
    let allRepositories = [];

    for (let i = 0; i < friends.length; ++i) {
        const friendRepositories = await (await fetch(`api/users/${friends[i]["id"]}/repositories`)).json();
        allRepositories = [...allRepositories,
            ...friendRepositories.map(repository => {repository["userName"] = friends[i]["login"]; return repository})]
    }

    return allRepositories;
};


const render = (container, data, mapFn) => data.map(d => container.appendChild(mapFn(d)));


const generateData = async () => {
    const userId = 2;

    const friendsRepositories = await getFriendsRepositories(userId);
    const recommendedRepositories = await (await fetch(`api/users/${userId}/repositories/recommended`)).json();

    render(document.querySelector(".News-Container"), friendsRepositories, friendsRepositoryModel);
    render(document.querySelector(".Sidebar__block-container"), recommendedRepositories,
        recommendedRepositoryModel);
};

generateData();
