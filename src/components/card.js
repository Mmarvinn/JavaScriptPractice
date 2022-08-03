'use strict';

import {getTopRatedFilms} from '../services/api.js';

// console.log(getTopRatedFilms);

getTopRatedFilms().then(result => {
    let newDiv = document.createElement('div');
    let pFilmName = document.createElement('p');
    let pFilmOverview = document.createElement('p');
    let filmImg = document.createElement('img');

    filmImg.className = 'poster';
    newDiv.className = 'card';
    pFilmName.className = 'title';
    pFilmOverview.className = 'overview';

    filmImg.src = `http://image.tmdb.org/t/p/original${result[7]}`;
    pFilmName.textContent = result[0];
    pFilmOverview.textContent = result[1];

    charts.append(newDiv);
    newDiv.append(filmImg);
    newDiv.append(pFilmName);
    newDiv.append(pFilmOverview);

    filmImg.addEventListener('click', showDetailingInfoAboutFilm);

});

function showDetailingInfoAboutFilm() {
    history.pushState({page: 1}, "title 1", "?page=1");
    let divAboutFilm = document.createElement('div');
    let backGroundImage = 

    divAboutFilm.style.zIndex = '1000';
}