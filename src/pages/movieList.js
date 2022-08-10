'use strict';

import {createMovieCard} from '../components/card.js';
import {renderPageLayout} from '../layouts/createLayout.js';

export function createMovieList() {
    const arrayWithCards = [];

    for (let i = 0; i < 20; i++) {
        arrayWithCards.push(createMovieCard());
    }

    renderPageLayout(arrayWithCards);

    const main = document.querySelector('main');
    main.className = 'main--movie-list';
}