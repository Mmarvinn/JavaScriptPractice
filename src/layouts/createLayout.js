'use strict';

function createHeader() {
    const header = document.createElement('header');
    const headerLink = document.createElement('a');
    const headerImg = document.createElement('img');

    headerLink.textContent = 'HOME';
    headerLink.className = 'button_home';
    headerImg.src = '../images/logo.svg';
    headerImg.className = 'logo';
    headerLink.href = 'http://127.0.0.1:5555/index.html';
    header.append(headerImg);
    header.append(headerLink);

    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    const footerSpan = document.createElement('span');
    const footerSecSpan = document.createElement('span');

    footerSpan.textContent = 'Copyright © 2022, All Right Not Reserved';
    footerSpan.className = 'footer__copyright';
    footerSecSpan.textContent = 'Mmarvinn and a Co., Ltd';

    footer.append(footerSpan);
    footer.append(footerSecSpan);

    return footer;
}

export function renderPageLayout(node) {
    const header = createHeader();
    const footer = createFooter();
    const main = document.createElement('main');
    
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