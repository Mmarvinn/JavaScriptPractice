'use strict';

import {renderPageLayout} from '../layouts/createLayout.js';

export function createMovieInfo() {
    const movieDetailBlock = createStructurePageMovieDetailing();
 
    renderPageLayout(movieDetailBlock);

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    main.className = 'main--movie-info';
    header.className = 'mg-0';
    footer.className = 'mg-0';
}


function createStructurePageMovieDetailing() {
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
    movieContainer.append(movieContent);
    movieContent.append(title);
    title.append(releaseDate);
    movieContent.append(aboutMovieOptions);
    aboutMovieOptions.append(fullReleaseDate);
    aboutMovieOptions.append(movieGenge);
    aboutMovieOptions.append(movieDuration);
    movieContent.append(rating);
    rating.append(ratingIconWrapper);
    ratingIconWrapper.append(ratingIcon);
    ratingIconWrapper.append(ratingPercentage);
    rating.append(ratingText);
    movieContent.append(aboveDescription);
    movieContent.append(description);

    movieImg.src = '../images/thor.jpg';
    title.textContent = 'Тор: Любов і грім';
    releaseDate.textContent = '(2022)';
    fullReleaseDate.textContent = '06/07/2022 ';
    movieGenge.textContent = 'Бойовик, Пригоди, Фентезі ';
    movieDuration.textContent = '1h 59m';
    ratingIcon.src = './images/icon.png';
    ratingPercentage.textContent = '62.36%';
    ratingText.textContent = 'Rating of Users';
    aboveDescription.textContent = 'Description';
    description.textContent = 'У новому фільмі «Тор: Любов і грім» від Marvel Studios Бог грому вирушає на пошуки внутрішнього спокою. Проте галактичний убивця Ґорр, знаний як Убивця богів, прагне знищити усіх небожителів та перериває вихід Тора на пенсію. Щоб подолати загрозу, Бог грому звертається по допомогу до королеви Валькірії, Корґа та своєї колишньої дівчини Джейн Фостер. Остання, на подив Тора, тепер володіє його магічним молотом Мйолніром так само, як і Могутній Тор. Разом вони вирушають у жахливу космічну пригоду, щоб розкрити таємницю помсти Убивці богів і зупинити його, поки не стало надто пізно.';

    return movieContainer;
}