'use strict';

const baseUrl = 'https://api.themoviedb.org/3'; // to upper casse
const baseImgUrl = 'http://image.tmdb.org/t/p/';
const apiKey = '1be31873de9aa764d36bafbd53752fba';

export async function getTopRatedFilms() {

    let response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    let json = await response.json();

    console.log(json);

    let propOfFilm = [];
    let posterOfFilm = json.results[0].poster_path;
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
    propOfFilm.push(posterOfFilm);

    return propOfFilm;
}

// switch : case