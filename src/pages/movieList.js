'use strict';

import {renderPageLayout} from '../layouts/createLayout.js';

export function createMovieList() {
    const button = document.createElement('button');

    button.textContent = "click";

    button.onclick = () => {
        history.pushState({page:1}, 'title', `/film`);
    };

    renderPageLayout(button);
    // return button;
}