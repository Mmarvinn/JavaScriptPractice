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
    const ratedLine = document.querySelector('.movie-container--content--wrapper-rating--wrapper-rating-icon--rating-body__rating-line');
    
    header.className = 'mg-0';
    footer.className = 'mg-0';
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
    const ratingPercentage = document.createElement('span');
    const ratingText = document.createElement('span');
    const aboveDescription = document.createElement('h3');
    const description = document.createElement('p');

    let genres = data.genres.map(item => item.name).join(', ');

    movieContainer.style.backgroundImage = `url("${BASE_IMG_URL}${data.backdrop_path}")`;
    movieContainer.className = 'movie-container';
    movieImg.className = 'movie-container--img';
    movieContent.className = 'movie-container--content';
    title.className = 'movie-container--content--title mg-10';
    releaseYear.className = 'release-year';
    aboutMovieOptions.className = 'movie-container--content--wrapper-about-movie mg-10';
    fullReleaseDate.className = 'movie-container--content--wrapper-about-movie--release-date';
    movieGenge.className = 'movie-container--content--wrapper-about-movie--movie-genre mg-left-10';
    movieDuration.className = 'movie-container--content--wrapper-about-movie--movie-duration mg-left-10';
    rating.className = 'movie-container--content--wrapper-rating mg-10';
    ratingIconWrapper.className = 'movie-container--content--wrapper-rating--wrapper-rating-icon';
    ratingBody.className = 'movie-container--content--wrapper-rating--wrapper-rating-icon--rating-body';
    ratingIconWrapperLine.className = 'movie-container--content--wrapper-rating--wrapper-rating-icon--rating-body__rating-line';
    ratingPercentage.className = 'movie-container--content--wrapper-rating--wrapper-rating-icon--rating-percentage mg-left-10';
    ratingText.className = 'movie-container--content--wrapper-rating--rating-text';
    aboveDescription.className = 'movie-container--content--above-description mg-10';
    description.className = 'movie-container--content--description mg-10';

    movieImg.src = `${BASE_IMG_URL}${data.poster_path}`;
    title.textContent = `${data.original_title}`;
    releaseYear.textContent = `(${data.release_date.slice(0, 4)})`;
    fullReleaseDate.textContent = `${data.release_date} `;
    movieGenge.textContent = genres;
    movieDuration.textContent = `${data.runtime} min`;
    ratingPercentage.textContent = `${data.vote_average.toFixed(2)} of 10`;
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
    ratingIconWrapper.append(ratingPercentage);
    movieContent.append(aboveDescription);
    movieContent.append(description);

    return movieContainer;
}