import { MovieDetails } from '../types'
export const movieDetailsFormat = (movie: MovieDetails) => {
    return {
        backdrop_path: {
            w500: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            original: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        },
        budget: movie.budget,
        genres: movie.genres,
        id: movie.id,
        original_title: movie.original_title,
        production_companies: movie.production_companies.map((company) => {
            return {
                ...company,
                logo_path: {
                    w500: `https://image.tmdb.org/t/p/w500${company.logo_path}`,
                    original: `https://image.tmdb.org/t/p/original${company.logo_path}`,
                },
            }
        }),
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        overview: movie.overview,
        title: movie.title,
    }
}
