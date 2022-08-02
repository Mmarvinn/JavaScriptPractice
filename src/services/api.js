'use strict';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '1be31873de9aa764d36bafbd53752fba';

async function getTopRatedFilms() {

    let response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    let json = await response.json();
    let filmName = json.results[0].original_title;
    let filmOverview = json.results[0].overview;

    console.log(json);
    return filmName, filmOverview;
}

getTopRatedFilms();
