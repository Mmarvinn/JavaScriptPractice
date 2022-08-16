export function getFilmId() {
    return window.location.href.slice(window.location.href.indexOf('#film/') + 6);
}