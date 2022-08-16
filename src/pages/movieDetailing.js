'use strict';

import { renderPageLayout } from '../layouts/createLayout.js';
import { getInfoAboutFilm } from '../services/api.js';
import { displayError } from '../components/displayError.js';
import { BASE_IMG_URL } from '../services/api.js';
import { displayLoading } from '../components/displayLoading.js';

export async function createMovieInfo(filmId) {
    displayLoading();

    try {
        const info = await getInfoAboutFilm(filmId);
        showMovieInfo(info);
    } catch(error) {
        displayError(error);
    }
}

function showMovieInfo(data) {
    const movieDetailBlock = createStructurePageMovieDetailing(data);
    
    renderPageLayout(movieDetailBlock, 'main--movie-info');

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const ratedLine = document.querySelector('.rating-body--rating-line');
    
    header.className = 'header__movie-detailing mg-0';
    footer.className = 'footer__movie-detailing mg-0';
    ratedLine.style.width = `${data.vote_average.toFixed(1) * 10}%`;
}


function createStructurePageMovieDetailing(data) {
    const movieContainer = document.createElement('div');
    const movieImg = document.createElement('img');
    const movieContent = document.createElement('div');
    const title = document.createElement('h1');
    const releaseYear = document.createElement('span');
    const aboutMovieOptions = document.createElement('div');
    const fullReleaseDate = document.createElement('span');
    const movieGenge = document.createElement('span');
    const movieDuration = document.createElement('span');
    const rating = document.createElement('div');
    const ratingIconWrapper = document.createElement('div');
    const ratingIconWrapperLine = document.createElement('div');
    const ratingBody = document.createElement('div');
    const ratingLevel = document.createElement('span');
    const ratingText = document.createElement('span');
    const aboveDescription = document.createElement('h3');
    const description = document.createElement('p');

    let genres = data.genres.map(item => item.name).join(', ');

    movieContainer.style.backgroundImage = `url("${BASE_IMG_URL}${data.backdrop_path}")`;
    movieContainer.className = 'movie-container';
    movieImg.className = 'movie-container--img';
    movieContent.className = 'content';
    title.className = 'content--title mg-10';
    releaseYear.className = 'content--release-year';
    aboutMovieOptions.className = 'movie-options mg-10';
    fullReleaseDate.className = 'movie-options--release-date';
    movieGenge.className = 'movie-options--movie-genre mg-left-10';
    movieDuration.className = 'movie-options--movie-duration mg-left-10';
    rating.className = 'wrapper-rating mg-10';
    ratingIconWrapper.className = 'rating';
    ratingBody.className = 'rating-body';
    ratingIconWrapperLine.className = 'rating-body--rating-line';
    ratingLevel.className = 'rating--rating-level mg-left-10';
    ratingText.className = 'wrapper-rating--rating-text';
    aboveDescription.className = 'content--above-description mg-10';
    description.className = 'content--description mg-10';

    movieImg.setAttribute('alt', 'Movie title image');

    movieImg.src = `${BASE_IMG_URL}${data.poster_path}`;
    title.textContent = `${data.original_title}`;
    releaseYear.textContent = `(${data.release_date.slice(0, 4)})`;
    fullReleaseDate.textContent = `${data.release_date} `;
    movieGenge.textContent = genres;
    movieDuration.textContent = `${data.runtime} min`;
    ratingLevel.textContent = `${data.vote_average.toFixed(2)} of 10`;
    ratingText.textContent = 'Rating of Users';
    aboveDescription.textContent = 'Description';
    description.textContent = `${data.overview}`;

    movieContainer.append(movieImg);
    movieContainer.append(movieContent);
    movieContent.append(title);
    title.append(releaseYear);
    movieContent.append(aboutMovieOptions);
    aboutMovieOptions.append(fullReleaseDate);
    aboutMovieOptions.append(movieGenge);
    aboutMovieOptions.append(movieDuration);
    movieContent.append(rating);
    rating.append(ratingText);
    rating.append(ratingIconWrapper);
    ratingIconWrapper.append(ratingBody);
    ratingBody.append(ratingIconWrapperLine);
    ratingIconWrapper.append(ratingLevel);
    movieContent.append(aboveDescription);
    movieContent.append(description);

    return movieContainer;
}