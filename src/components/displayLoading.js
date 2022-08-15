import { renderPageLayout } from '../layouts/createLayout.js';

export function displayLoading() {
    const displayLoadingDiv = document.createElement('div');
    const dispLoadText = document.createElement('p');

    displayLoadingDiv.append(dispLoadText);

    dispLoadText.className = 'display-loading--loading-text';
    dispLoadText.textContent = 'Loading.....';

    renderPageLayout(displayLoadingDiv, 'display-loading');
}