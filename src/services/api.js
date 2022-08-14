'use strict';

export const BASE_IMG_URL = 'http://image.tmdb.org/t/p/original';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1be31873de9aa764d36bafbd53752fba';

export function getTopRatedFilms() {
    return request(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
}

export function getInfoAboutFilm(filmId) {
    return request(`/movie/${filmId}?api_key=${API_KEY}&language=en-US`);
}

async function request(url) {
    let response = await fetch(`${BASE_URL}${url}`);

    if (response.ok) {
        return await response.json();
    } else {
        const responseErr = await response.json();
        const err = new Error();

        err.data = responseErr.status_message;
        err.status = response.status;
        throw err;
    }
}