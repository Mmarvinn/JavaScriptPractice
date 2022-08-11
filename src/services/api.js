'use strict';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1be31873de9aa764d36bafbd53752fba';

export async function getTopRatedFilms() {

    let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    let data = await response.json();

    return data;
}

// .. універсальна функція щоб робити реквести на базі феча