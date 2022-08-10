'use strict';

const BASEURL = 'https://api.themoviedb.org/3';
const APIKEY = '1be31873de9aa764d36bafbd53752fba';

export async function getTopRatedFilms() {

    let response = await fetch(`${BASEURL}/movie/popular?api_key=${APIKEY}&language=en-US&page=1`);
    let json = await response.json();

    const propOfFilm = [];

    for (let i = 0; i < json.results.length; i++) {
        const propOfOneFilm = [];
    
        const posterOfFilm = json.results[i].poster_path;
        const filmName = json.results[i].original_title;
        const filmOverview = json.results[i].overview;
        const backdrop = json.results[i].backdrop_path;
        const releaseDate = json.results[i].release_date;
        const voteAverage = json.results[i].vote_average;
        const voteCount = json.results[i].vote_count;
        const filmId = json.results[i].id;

        propOfOneFilm.push(posterOfFilm);
        propOfOneFilm.push(filmName);
        propOfOneFilm.push(filmOverview);
        propOfOneFilm.push(backdrop);
        propOfOneFilm.push(releaseDate);
        propOfOneFilm.push(voteAverage);
        propOfOneFilm.push(voteCount);
        propOfOneFilm.push(filmId);

        propOfFilm.push(propOfOneFilm);
    }

    return propOfFilm;
}