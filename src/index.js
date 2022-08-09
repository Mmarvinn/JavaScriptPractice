'use strict';

import {createMovieList} from './pages/movieList.js';
import {createMovieInfo} from './pages/movieDetailing.js';

// createMovieList();

// window.onpopstate = (event) => {
//     console.log(`location: ${document.location}, state: ${JSON.stringify(event.state)}`);
// };

function app() {
    console.log(location);

    switch(location.pathname) {
        case '/':
            createMovieList();
            break;

        case '/film':
            createMovieInfo();
            break;

        default:
            createMovieList();
    }
}

app();

window.addEventListener('popstate', (event) => {
    console.log(`location: ${document.location}, state: ${JSON.stringify(event.state)}`);
});