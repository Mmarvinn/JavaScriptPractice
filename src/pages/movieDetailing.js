'use strict';

import {renderPageLayout} from '../layouts/createLayout.js';

export function createMovieInfo() {
    const movieContainer = document.createElement('div');
    const movieImg = document.createElement('img');
    const movieContent = document.createElement('div');
    const title = document.createElement('h1');
    const releaseDate = document.createElement('span');
    const aboutMovieOptions = document.createElement('div');
    const fullReleaseDate = document.createElement('span');
    const movieGenge = document.createElement('span');
    const movieDuration = document.createElement('span');
    const rating = document.createElement('div');
    const ratingIconWrapper = document.createElement('div');
    const ratingIcon = document.createElement('img');
    const ratingPercentage = document.createElement('span');
    const ratingText = document.createElement('span');
    const aboveDescription = document.createElement('h3');
    const description = document.createElement('p');

    movieContainer.append(movieImg);
    movieImg.src = '../images/thor.jpg';
    movieContainer.append(movieContent);
    movieContent.append(title);
    title.textContent = 'Тор: Любов і грім';
    title.append(releaseDate);
    releaseDate.textContent = '(2022)';
    movieContent.append(aboutMovieOptions);
    aboutMovieOptions.append(fullReleaseDate);
    fullReleaseDate.textContent = '06/07/2022 ';
    aboutMovieOptions.append(movieGenge);
    movieGenge.textContent = 'Бойовик, Пригоди, Фентезі ';
    aboutMovieOptions.append(movieDuration);
    movieDuration.textContent = '1h 59m';
    movieContent.append(rating);
    rating.append(ratingIconWrapper);
    ratingIconWrapper.append(ratingIcon);
    ratingIcon.src = './images/icon.png';
    ratingIconWrapper.append(ratingPercentage);
    ratingPercentage.textContent = '62.36%';
    rating.append(ratingText);
    ratingText.textContent = 'Rating of Users';
    movieContent.append(aboveDescription);
    aboveDescription.textContent = 'Description';
    movieContent.append(description);
    description.textContent = 'У новому фільмі «Тор: Любов і грім» від Marvel Studios Бог грому вирушає на пошуки внутрішнього спокою. Проте галактичний убивця Ґорр, знаний як Убивця богів, прагне знищити усіх небожителів та перериває вихід Тора на пенсію. Щоб подолати загрозу, Бог грому звертається по допомогу до королеви Валькірії, Корґа та своєї колишньої дівчини Джейн Фостер. Остання, на подив Тора, тепер володіє його магічним молотом Мйолніром так само, як і Могутній Тор. Разом вони вирушають у жахливу космічну пригоду, щоб розкрити таємницю помсти Убивці богів і зупинити його, поки не стало надто пізно.';

    renderPageLayout(movieContainer);

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    main.className = 'main--movie-info';
    header.className = 'header__movie-detail';
    footer.className = 'footer__movie-detail';
}