"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showFormatter = void 0;
function showFormatter(show) {
    return {
        original_name: show.original_name,
        origin_country: show.origin_country,
        poster_path: `https://image.tmdb.org/t/p/original/${show.poster_path}`,
        id: show.id,
        name: show.name,
        vote_count: show.vote_count,
        first_air_date: show.first_air_date,
        vote_average: show.vote_average,
        overview: show.overview,
        backdrop_path: `https://image.tmdb.org/t/p/original/${show.backdrop_path}`,
        original_language: show.original_language,
        genre_ids: show.genre_ids,
        popularity: show.popularity,
        media_type: show.media_type,
    };
}
exports.showFormatter = showFormatter;
