'use strict';

function createLayout(content) {
    let header = document.createElement('header');
    let main = document.createElement('main');
    let footer = document.createElement('footer');
    let spanFooter = document.createElement('span');
    let aHeader = document.createElement('a');

    aHeader.textContent = 'HOME';
    main.textContent = 'hello, i am main';
    spanFooter.textContent = 'Copyright © 2022, All Right Not Reserved';
    spanFooter.style.paddingLeft = '10%';

    header.append(aHeader);
    footer.append(spanFooter);
    document.body.prepend(footer);
    document.body.prepend(main);
    document.body.prepend(header);
}

createLayout();