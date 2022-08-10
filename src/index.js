'use strict';

import {createMovieList} from './pages/movieList.js';
import {createMovieInfo} from './pages/movieDetailing.js';

function routing() {
    console.log(location);

    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');

    if (main) {
        main.remove();
        footer.remove();
        header.remove();
    }

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

window.addEventListener('popstate', routing);