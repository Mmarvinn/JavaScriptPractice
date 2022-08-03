'use strict';

// import {getTopRatedFilms} from '../src/services/api.js';

function createLayout(content) {
    let header = document.createElement('header');
    let main = document.createElement('main');
    let footer = document.createElement('footer');

    let footerSpan = document.createElement('span');
    let footerSecSpan = document.createElement('span');
    let headerA = document.createElement('a');
    let headerImg = document.createElement('img');

    for (let i = 0; i < 20; i++) {

        let cardDiv = document.createElement('div');
        let cardDivImg = document.createElement('img');
        let cardDivMovieName = document.createElement('h3');
        let cardDivMovieOverview = document.createElement('p');

        cardDiv.className = 'card';

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
    }

    headerA.textContent = 'HOME';
    footerSpan.textContent = 'Copyright © 2022, All Right Not Reserved';
    footerSecSpan.textContent = 'Mmarvinn and a Co., Ltd';
    headerImg.src = '../images/logo.svg';
    headerA.href = 'http://127.0.0.1:5555/index.html';

    header.append(headerImg);
    header.append(headerA);
    footer.append(footerSpan);
    footer.append(footerSecSpan);

    document.body.prepend(footer);
    document.body.prepend(main);
    document.body.prepend(header);
}

createLayout();