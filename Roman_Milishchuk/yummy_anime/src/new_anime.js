const new_anime = `
<article class="anime-list__anime-block">
    <a href="#">
        <img src="img/poster.jpg" class="anime-block__poster">
    </a>
    <header class="anime-block__title">
        <h3 class="anime-block__anime-name"> ХАНТЕР Х ХАНТЕР OVA-3 </h3>
        <button aria-label="rate" class="anime-block__rate fa fa-star"></button>
        <button aria-label="rating" class="anime-block__rating">6.76</button>
        <span class="anime-block_text-thin">(57 голосов)</span>
        <span class="anime-block__history-info anime-block_text-thin">2004 | OVA | СЕРИЙ: 14</span>
    </header>
    <main class="anime-block__general-info">
        <span class="anime-block_text-bold">Жанры:</span>
    <div class="genres">
        <a class="anime-block_text-thin" href="#">Сёнэн</a>,
        <a class="anime-block_text-thin" href="#">Приключения</a>,
        <a class="anime-block_text-thin" href="#">Фэнтези</a>,
        <a class="anime-block_text-thin" href="#">Экшен</a>,
        <a class="anime-block_text-thin" href="#">Суперспособности</a>,
        </div>
        <span class="anime-block_text-bold">Возрастной рейтинг: </span>
    <span class="anime-block_text-thin"> PG-13 (от 13 лет) </span>
    </main>
</article>`;

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const get_anime = async () => {
    await sleep(random(500, 8000));
    return new_anime;
};

