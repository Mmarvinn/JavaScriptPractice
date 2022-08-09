'use strict';

import {createMovieCard} from '../components/card.js';

export function cardLists() {
    const arrayWithCards = [];

    for (let i = 0; i < 20; i++) {
        arrayWithCards.push(createMovieCard()); // rename to cardList
    }

    return arrayWithCards;
}

// cardLists(createMovieCard());