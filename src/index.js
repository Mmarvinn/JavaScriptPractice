'use strict';

import {createMovieList} from './pages/movieList.js';
import {createMovieInfo} from './pages/movieDetailing.js';

function routing() {

    switch(location.hash) {
        case '':
            createMovieList();
            break;

        case '#film/':
            createMovieInfo();
            break;

        default:
            createMovieList();
    }
}

routing();

window.addEventListener('hashchange', routing);