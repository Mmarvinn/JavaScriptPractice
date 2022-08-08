'use strict';

// import {getTopRatedFilms} from '../src/services/api.js';
// import {cardLists} from './pages/pageLists.js';

function renderPageLayout() {
    let header = document.createElement('header');
    let main = document.createElement('main');
    let footer = document.createElement('footer');

    let footerSpan = document.createElement('span');
    let footerSecSpan = document.createElement('span');
    let headerA = document.createElement('a');
    let headerImg = document.createElement('img');

 /*    for (let i = 0; i < 20; i++) {
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
    } */

    headerA.textContent = 'HOME';
    headerA.classList = 'button_home';
    footerSpan.textContent = 'Copyright © 2022, All Right Not Reserved';
    footerSpan.classList = 'footer_copyright';
    footerSecSpan.textContent = 'Mmarvinn and a Co., Ltd';
    headerImg.src = '../images/logo.svg';
    headerImg.classList = 'logo';
    headerA.href = 'http://127.0.0.1:5555/index.html';

    header.append(headerImg);
    header.append(headerA);
    footer.append(footerSpan);
    footer.append(footerSecSpan);

    document.body.prepend(footer);
    document.body.prepend(main);
    document.body.prepend(header);
    
}

renderPageLayout();