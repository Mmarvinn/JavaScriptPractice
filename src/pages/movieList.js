'use strict';

import {createMovieCard} from '../components/card.js';
import {renderPageLayout} from '../layouts/createLayout.js';
import {getTopRatedFilms} from '../services/api.js';

export function createMovieList() {
    const arrayWithCards = [];

    getTopRatedFilms().then(result => {

        for (let i = 0; i < result.length; i++) {
            const oneFilm = result[i];
            const posterOfFilm = oneFilm[0];
            const filmName = oneFilm[1];
            const filmOverview = oneFilm[2];

            arrayWithCards.push(createMovieCard(posterOfFilm, filmName, filmOverview));
        }
    
            renderPageLayout(arrayWithCards);

        const main = document.querySelector('main');
        main.className = 'main--movie-list';
    });
}