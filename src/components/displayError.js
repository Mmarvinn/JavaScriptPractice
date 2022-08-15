import { renderPageLayout } from '../layouts/createLayout.js';

export function displayError(error) {
    const errorDiv = document.createElement('div');

    errorDiv.textContent = `Error status: ${error.status} : ${error.data}`;

    renderPageLayout(errorDiv, 'error-div');
}