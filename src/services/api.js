'use strict';

const baseUrl = 'https://api.themoviedb.org/3';
const baseImgUrl = 'http://image.tmdb.org/t/p/';
const apiKey = '1be31873de9aa764d36bafbd53752fba';

async function getTopRatedFilms() {

    let response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    let json = await response.json();
    let filmId = json.results[0].id;
    let posterFilm = json.results[0].poster_path;

    let responseImg = await fetch(`${baseImgUrl}original${posterFilm}`);
    let blob = await responseImg.blob();

    let propOfFilm = [];
    let filmName = json.results[0].original_title;
    let filmOverview = json.results[0].overview;
    let backdrop = json.results[0].backdrop_path;
    let poster = json.results[0].poster_path; 
    let releaseDate = json.results[0].release_date;
    let voteAverage = json.results[0].vote_average;
    let voteCount = json.results[0].vote_count;

    propOfFilm.push(filmName);
    propOfFilm.push(filmOverview);
    propOfFilm.push(backdrop);
    propOfFilm.push(poster);
    propOfFilm.push(releaseDate);
    propOfFilm.push(voteAverage);
    propOfFilm.push(voteCount);
    propOfFilm.push(blob);

    return propOfFilm;
}


getTopRatedFilms().then(result => {
    let newDiv = document.createElement('div');
    let pFilmName = document.createElement('p');
    let pFilmOverview = document.createElement('p');
    let filmImg = document.createElement('img');

    filmImg.className = 'img'
    newDiv.className = 'card';
    pFilmName.className = 'title';
    pFilmOverview.className = 'overview';

    filmImg.src = URL.createObjectURL(result[7]);
    pFilmName.textContent = result[0];
    pFilmOverview.textContent = result[1];

    charts.append(newDiv);
    newDiv.append(filmImg);
    newDiv.append(pFilmName);
    newDiv.append(pFilmOverview);
});