import { createHeader } from '../layouts/createLayout.js';
import { createFooter } from '../layouts/createLayout.js';
import { clearBody } from '../components/clearBody.js';

export function displayLoading() {
    clearBody();
    const displayLoadingDiv = document.createElement('div');
    const dispLoadText = document.createElement('p');

    displayLoadingDiv.append(dispLoadText);

    document.body.prepend(createFooter());
    document.body.prepend(displayLoadingDiv);
    document.body.prepend(createHeader());

    displayLoadingDiv.className = 'display-loading';
    dispLoadText.className = 'display-loading--loading-text';
    dispLoadText.textContent = 'Loading.....';
}