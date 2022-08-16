'use strict';

import { createMovieList } from './pages/movieList.js';
import { createMovieInfo } from './pages/movieDetailing.js';
import { getFilmId } from './utils/getFilmId.js';

export function routing() {
    let filmId = getFilmId();

    switch(location.hash) {
        case '':
            createMovieList();
            break;

        case `#film/${filmId}`:
            createMovieInfo(filmId);
            break;

        default:
            createMovieList();
    }
}

routing();

window.addEventListener('hashchange', routing);