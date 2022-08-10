'use strict';

export function createMovieCard() {

    let cardDiv = document.createElement('div');
    let cardDivImg = document.createElement('img');
    let cardDivMovieName = document.createElement('h3');
    let cardDivMovieOverview = document.createElement('p');

    cardDiv.className = 'card';
    cardDivImg.className = 'card--img';
    cardDivMovieName.classList = 'card--movie-name mg-0';
    cardDivMovieOverview.className = 'card--movie-overview';

    cardDivImg.src = '../images/thor.jpg';
    cardDivMovieName.textContent = 'Тор: Любов і грім';
    cardDivMovieOverview.textContent = 'У новому фільмі «Тор: Любов і грім» від Marvel Studios Бог грому вирушає на пошуки внутрішнього спокою. Проте галактичний убивця Ґорр, знаний як Убивця богів, прагне знищити усіх небожителів та перериває вихід Тора на пенсію. Щоб подолати загрозу, Бог грому звертається по допомогу до королеви Валькірії, Корґа та своєї колишньої дівчини Джейн Фостер. Остання, на подив Тора, тепер володіє його магічним молотом Мйолніром так само, як і Могутній Тор. Разом вони вирушають у жахливу космічну пригоду, щоб розкрити таємницю помсти Убивці богів і зупинити його, поки не стало надто пізно.';

    cardDiv.append(cardDivImg);
    cardDiv.append(cardDivMovieName);
    cardDiv.append(cardDivMovieOverview);

    cardDiv.addEventListener('click', onClick);

    return cardDiv;
};

function onClick() {
    window.location.hash = "#film/";
}