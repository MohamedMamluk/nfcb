import { Show } from '../types'

export function showFormat(show: Show) {
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
        poster_path: {
            w500: `https://image.tmdb.org/t/p/w500/${show.poster_path}`,
            original: `https://image.tmdb.org/t/p/original/${show.poster_path}`,
        },
        backdrop_path: {
            w500: `https://image.tmdb.org/t/p/w500/${show.backdrop_path}`,
            original: `https://image.tmdb.org/t/p/original/${show.backdrop_path}`,
        },
    }
}
