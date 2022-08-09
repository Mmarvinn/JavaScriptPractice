'use strict';

import {cardLists} from './cardLists.js';
import {renderPageLayout} from '../layouts/createLayout.js';

function generateLayoutWithContent(content) {
    renderPageLayout();
    let main = document.querySelector('main');

    main.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); grid-row-gap: 50px; justify-items: center;';

    for (let i = 0; i < 20; i++) {
        main.append(content[i]);
    }
}

generateLayoutWithContent(cardLists());