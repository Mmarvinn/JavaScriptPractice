'use strict';

import {getTopRatedFilms} from '../services/api.js';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/original';

export function createMovieCard(obj) {

    let cardDiv = document.createElement('div');
    let cardDivImg = document.createElement('img');
    let cardDivMovieName = document.createElement('h3');
    let cardDivMovieOverview = document.createElement('p');

    cardDiv.className = 'card';
    cardDivImg.className = 'card--img';
    cardDivMovieName.classList = 'card--movie-name mg-0';
    cardDivMovieOverview.className = 'card--movie-overview';

    cardDivImg.src = `${BASE_IMG_URL}${obj.posterOfFilm}`;
    cardDivMovieName.textContent = obj.filmName;
    cardDivMovieOverview.textContent = obj.filmOverview;

    cardDiv.append(cardDivImg);
    cardDiv.append(cardDivMovieName);
    cardDiv.append(cardDivMovieOverview);

    cardDiv.addEventListener('click', onClick);

    return cardDiv;
};

function onClick() {
    window.location.hash = "#film/";
}