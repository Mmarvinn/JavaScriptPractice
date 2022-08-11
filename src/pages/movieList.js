'use strict';

import {createMovieCard} from '../components/card.js';
import {renderPageLayout} from '../layouts/createLayout.js';
import {getTopRatedFilms} from '../services/api.js';

export function createMovieList() {
    const arrayWithCards = [];

    getTopRatedFilms().then(onFullFilled, onRejected);
    
    function onFullFilled(result) {
        console.log(result);
        if (result?.results) {

            result.results.forEach(element => {
                const movieInfo = {};

                movieInfo.posterOfFilm = element.poster_path;
                movieInfo.filmName = element.original_title;
                movieInfo.filmOverview = element.overview;

                arrayWithCards.push(createMovieCard(movieInfo));
            });

            const mainClassName = 'main--movie-list';
            renderPageLayout(arrayWithCards, mainClassName);

        } else {
            onRejected();
        }
    };

    function onRejected() {
        console.log('error');
    }
}