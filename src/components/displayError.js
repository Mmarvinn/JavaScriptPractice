import { createHeader } from '../layouts/createLayout.js';
import { createFooter } from '../layouts/createLayout.js';
import { clearBody } from '../components/clearBody.js';

export function displayError(error) {
    clearBody();
    const errorDiv = document.createElement('div');

    document.body.prepend(createFooter());
    document.body.prepend(errorDiv);
    document.body.prepend(createHeader());
    
    errorDiv.textContent = `Error status: ${error.status} : ${error.data}`;
    errorDiv.className = 'error-div';
}