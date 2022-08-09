'use strict';

import {cardLists} from '../pages/cardLists.js';
import {showDetailingInfoAboutFilm} from '../pages/movieDetailing.js';

function switchBetweenPages() {

    history.pushState(null, '', `/film/${filmId}`);

    switch(history.state) {
        case 'http://127.0.0.1:5555/':
            cardLists(createMovieCard());
            break;
        case `http://127.0.0.1:5555/film/${filmId}`:
            showDetailingInfoAboutFilm(filmId);
    }
}