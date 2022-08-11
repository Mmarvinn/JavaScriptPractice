'use strict';

import {createMovieCard} from '../components/card.js';
import {renderPageLayout} from '../layouts/createLayout.js';
import {getTopRatedFilms} from '../services/api.js';

export function createMovieList() {
    const arrayWithCards = [];

    getTopRatedFilms().then(data => {
        
        data.results.forEach(element => {
            arrayWithCards.push(createMovieCard({
                posterOfFilm: element.poster_path,
                filmName: element.original_title,
                filmOverview: element.overview,
            }));
        });

        renderPageLayout(arrayWithCards, 'main--movie-list');
    });
}