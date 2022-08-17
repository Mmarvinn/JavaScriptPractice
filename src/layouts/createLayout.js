'use strict';

import { clearBody } from "../utils/clearBody.js";

export function createHeader() {
    const header = document.createElement('header');
    const headerLink = document.createElement('a');
    const headerImg = document.createElement('img');

    headerLink.textContent = 'HOME';
    headerLink.className = 'button-home';
    headerImg.src = './JavaScriptPractice/images/logo.svg';
    headerImg.className = 'logo';
    headerLink.href = '#';
    header.append(headerImg);
    header.append(headerLink);

    return header;
}

export function createFooter() {
    const footer = document.createElement('footer');
    const footerSpan = document.createElement('span');
    const footerSecSpan = document.createElement('span');

    footerSpan.textContent = 'Copyright © 2022, All Right Not Reserved';
    footerSpan.className = 'footer--copyright';
    footerSecSpan.textContent = 'Mmarvinn and a Co., Ltd';

    footer.append(footerSpan);
    footer.append(footerSecSpan);

    return footer;
}

export function renderPageLayout(node, mainClassName) {
    clearBody();
    const header = createHeader();
    const footer = createFooter();
    const main = document.createElement('main');
    main.className = mainClassName;
    
    if (node?.length) {
        for (let n of node) {
            main.append(n);
        }
    } else if (node) {
        main.append(node);
    }

    document.body.prepend(footer);
    document.body.prepend(main);
    document.body.prepend(header);
}
