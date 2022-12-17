"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topRated = void 0;
function topRated(show) {
    return {
        adult: show.adult,
        genre_ids: show.genre_ids,
        id: show.id,
        original_language: show.original_language,
        original_title: show.original_title,
        overview: show.overview,
        popularity: show.popularity,
        release_date: show.release_date,
        title: show.title,
        video: show.video,
        vote_average: show.vote_average,
        vote_count: show.vote_count,
        poster_path: `https://image.tmdb.org/t/p/original/${show.poster_path}`,
        backdrop_path: `https://image.tmdb.org/t/p/original/${show.backdrop_path}`,
    };
}
exports.topRated = topRated;
