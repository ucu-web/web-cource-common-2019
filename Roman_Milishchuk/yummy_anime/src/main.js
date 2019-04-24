import "../styles/new-on-site/new-on-site.css"
import "../styles/layout/layout.css"
import "../styles/main-header/main-header.css"
import "../styles/main-search/main-search.css"
import "../styles/ongoing-gallery/ongoing-gallery.css"
import "../styles/news-table/news-table.css"
import "../styles/last_videos/last_videos.css"
import "../styles/new-on-site/new-on-site.css"
import "../styles/search-filter/search-filter.css"
import "../styles/main-footer/main-footer.css"
import "../styles/common.css"

import {get_anime} from "./new_anime"

const add_all = (get_func, n) => n !== 0 ? Promise.resolve(get_func())
    .then(value => add_anime(value))
    .then(add_all(get_func, n - 1)) : true;

const add_anime_to_container = (container, new_anime) => {
    container.innerHTML += new_anime;
};

const add_anime = add_anime_to_container.bind(null, document.body.getElementsByClassName("new-on-site__anime-list")[0]);

add_all(get_anime, 8);
