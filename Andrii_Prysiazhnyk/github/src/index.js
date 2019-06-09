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


const getFriendsRepositories = async (userId) => {
    const friends = await (await fetch(`api/users/${userId}/friends`)).json();
    let allRepositories = [];

    friends.forEach(async friend => {
        const friendRepositories = await (await fetch(`api/users/${friend["id"]}/repositories`));
    });
};


const generateData = async () => {
    const userId = 2;

    const friends = await (await fetch(`api/users/${userId}/friends`)).json();

    let friendsRepositories = [];

    for (let i = 0; i < friends.length; ++i) {
        friendsRepositories = friendsRepositories.concat(await (await fetch(`api/users/${friends[i]["id"]}/repositories`)).json());
    }


    const user = await (await fetch("api/users/1")).json();
    const recommended = await (await fetch(`api/users/${userId}/repositories/recommended`)).json();

    const container1 = document.querySelector(".News-Container");
    const container2 = document.querySelector(".Sidebar__block-container");

    friendsRepositories.map(element => container1.appendChild(friendsRepository(user, element)));
    recommended.map(element => container2.appendChild(recommendedRepository(element)));
};

generateData();
