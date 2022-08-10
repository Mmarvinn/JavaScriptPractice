'use strict';

const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_IMG_URL = 'http://image.tmdb.org/t/p/';
const API_KEY = '1be31873de9aa764d36bafbd53752fba';

export async function getTopRatedFilms() {

    let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    let json = await response.json();

    let propOfFilm = [];

    for (let i = 0; i < json.results.length; i++) {
    
        let posterOfFilm = json.results[i].poster_path;
        let filmName = json.results[i].original_title;
        let filmOverview = json.results[i].overview;
        let backdrop = json.results[i].backdrop_path;
        let poster = json.results[i].poster_path; 
        let releaseDate = json.results[i].release_date;
        let voteAverage = json.results[i].vote_average;
        let voteCount = json.results[i].vote_count;

        propOfFilm.push(filmName);
        propOfFilm.push(filmOverview);
        propOfFilm.push(backdrop);
        propOfFilm.push(poster);
        propOfFilm.push(releaseDate);
        propOfFilm.push(voteAverage);
        propOfFilm.push(voteCount);
        propOfFilm.push(posterOfFilm);
    }

    return propOfFilm;
}