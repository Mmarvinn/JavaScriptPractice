'use strict';

import {createMovieCard} from '../components/card.js';

function cardLists() {

    for (let i = 0; i < 19; i++) {
        createMovieCard();
    }
}

cardLists(createMovieCard());