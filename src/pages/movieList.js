'use strict';

import { createMovieCard } from '../components/card.js';
import { renderPageLayout } from '../layouts/createLayout.js';
import { getTopRatedFilms } from '../services/api.js';
import { displayError } from '../components/displayError.js';
import { displayLoading } from '../components/displayLoading.js';

export async function createMovieList() {
    displayLoading();

    try {
        const info = await getTopRatedFilms();
        showMovieList(info);
    } catch(error) {
        displayError(error);
    }
}

function showMovieList(data) {
    const arrayWithCards = [];

    data.results.forEach(element => {
        arrayWithCards.push(createMovieCard({
            posterOfFilm: element.poster_path,
            filmName: element.original_title,
            filmOverview: element.overview,
            filmId: element.id,
        }));
    });

    renderPageLayout(arrayWithCards, 'main--movie-list');
}