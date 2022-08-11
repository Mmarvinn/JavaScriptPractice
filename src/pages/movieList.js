'use strict';

import {createMovieCard} from '../components/card.js';
import {renderPageLayout} from '../layouts/createLayout.js';
import {getTopRatedFilms} from '../services/api.js';

export function createMovieList() {
    getTopRatedFilms().then(onFullFilled, onRejected);  
}

function onFullFilled(data) {
    const arrayWithCards = [];
        
    if (data?.results) {

        data.results.forEach(element => {
            arrayWithCards.push(createMovieCard({
                posterOfFilm: element.poster_path,
                filmName: element.original_title,
                filmOverview: element.overview,
            }));
        });

        renderPageLayout(arrayWithCards, 'main--movie-list');

    } else {
        onRejected(data.status_message);
    }
}

function onRejected(error) {
    const errorDiv = document.createElement('div');

    document.body.prepend(errorDiv);
    errorDiv.textContent = `Error: ${error}`;
    errorDiv.className = 'error-div';
}