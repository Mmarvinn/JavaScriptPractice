'use strict';

// import {getTopRatedFilms} from '../services/api.js';

// console.log(getTopRatedFilms);

/* getTopRatedFilms().then(result => {
    let newDiv = document.createElement('div');
    let pFilmName = document.createElement('p');
    let pFilmOverview = document.createElement('p');
    let filmImg = document.createElement('img');

    filmImg.className = 'poster';
    newDiv.className = 'card';
    pFilmName.className = 'title';
    pFilmOverview.className = 'overview';

    filmImg.src = `http://image.tmdb.org/t/p/original${result[7]}`;
    pFilmName.textContent = result[0];
    pFilmOverview.textContent = result[1];

    charts.append(newDiv);
    newDiv.append(filmImg);
    newDiv.append(pFilmName);
    newDiv.append(pFilmOverview);

    filmImg.addEventListener('click', showDetailingInfoAboutFilm);

}); */

/* function showDetailingInfoAboutFilm() {
    history.pushState({page: 1}, "title 1", "?page=1");
    let divAboutFilm = document.createElement('div');
    let backGroundImage = 

    divAboutFilm.style.zIndex = '1000';
} */

export function createMovieCard() {
    let main = document.querySelector('main');

    main.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); grid-row-gap: 50px; justify-items: center;';

    let cardDiv = document.createElement('div');
    let cardDivImg = document.createElement('img');
    let cardDivMovieName = document.createElement('h3');
    let cardDivMovieOverview = document.createElement('p');

    cardDiv.classList = 'card';
    cardDivImg.classList = 'card_img';
    cardDivMovieName.classList = 'card_movie_name';
    cardDivMovieOverview.classList = 'card_movie_overview';

    // cardDivImg.src = `${content[7]}`;
    // cardDivMovieName.textContent = `${content[0]}`;
    // cardDivMovieOverview.textContent = `${content[1]}`;

    cardDivImg.src = '../images/thor.jpg';
    cardDivMovieName.textContent = 'Тор: Любов і грім';
    cardDivMovieOverview.textContent = 'У новому фільмі «Тор: Любов і грім» від Marvel Studios Бог грому вирушає на пошуки внутрішнього спокою. Проте галактичний убивця Ґорр, знаний як Убивця богів, прагне знищити усіх небожителів та перериває вихід Тора на пенсію. Щоб подолати загрозу, Бог грому звертається по допомогу до королеви Валькірії, Корґа та своєї колишньої дівчини Джейн Фостер. Остання, на подив Тора, тепер володіє його магічним молотом Мйолніром так само, як і Могутній Тор. Разом вони вирушають у жахливу космічну пригоду, щоб розкрити таємницю помсти Убивці богів і зупинити його, поки не стало надто пізно.';

    main.append(cardDiv);
    cardDiv.append(cardDivImg);
    cardDiv.append(cardDivMovieName);
    cardDiv.append(cardDivMovieOverview);
};