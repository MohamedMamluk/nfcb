"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tvFormat = void 0;
const tvFormat = (show) => {
    return {
        genre_ids: show.genre_ids,
        id: show.id,
        original_language: show.original_language,
        original_name: show.original_name,
        overview: show.overview,
        popularity: show.popularity,
        first_air_date: show.first_air_date,
        name: show.name,
        vote_average: show.vote_average,
        vote_count: show.vote_count,
        poster_path: {
            w500: `https://image.tmdb.org/t/p/w500/${show.poster_path}`,
            original: `https://image.tmdb.org/t/p/original/${show.poster_path}`,
        },
        backdrop_path: {
            w500: `https://image.tmdb.org/t/p/w500/${show.backdrop_path}`,
            original: `https://image.tmdb.org/t/p/original/${show.backdrop_path}`,
        },
    };
};
exports.tvFormat = tvFormat;
