import { RESTDataSource } from 'apollo-datasource-rest'
import {
    CastDetails,
    TrailersDetails,
    TrendingType,
    MovieDetails,
    Show,
} from '../utils/types'
import { showFormat } from '../utils/TMDB FORMATS/showFormat'
import { actorFormat } from '../utils/TMDB FORMATS/actorFormat'
import { trailerFormat } from '../utils/TMDB FORMATS/trailerFormat'
import { movieDetailsFormat } from '../utils/TMDB FORMATS/movieDetailsFormat'
import { tvFormat } from '../utils/TMDB FORMATS/tv/tvShowFormat'
class TMDBAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.themoviedb.org/3/'
    }
    async getPopular(page: string) {
        const { results } = await this.get('movie/popular', {
            api_key: process.env.TMDB_API_KEY,
            page: page || 1,
        })
        return Array.isArray(results)
            ? results.map((show: Show) => showFormat(show))
            : []
    }
    async getTopRated() {
        const { results } = await this.get('movie/top_rated', {
            api_key: process.env.TMDB_API_KEY,
            language: 'en-US',
            page: 1,
        })
        return Array.isArray(results)
            ? results.map((show) => showFormat(show))
            : []
    }

    async getAction(page: number) {
        const { results } = await this.get('discover/movie', {
            api_key: process.env.TMDB_API_KEY,
            with_genres: 28,
            page,
        })
        return Array.isArray(results)
            ? results.map((show) => showFormat(show))
            : []
    }

    async getComedy(page: number) {
        const { results } = await this.get('discover/movie', {
            api_key: process.env.TMDB_API_KEY,
            with_genres: 35,
            page,
        })
        return Array.isArray(results)
            ? results.map((show) => showFormat(show))
            : []
    }

    async getHorror(page: number) {
        const { results } = await this.get('discover/movie', {
            api_key: process.env.TMDB_API_KEY,
            with_genres: 27,
            page,
        })
        return Array.isArray(results)
            ? results.map((show) => showFormat(show))
            : []
    }

    async getRomance(page: number) {
        const { results } = await this.get('discover/movie', {
            api_key: process.env.TMDB_API_KEY,
            with_genres: 10749,
            page,
        })
        return Array.isArray(results)
            ? results.map((show) => showFormat(show))
            : []
    }

    async getDocumentaries(page: number) {
        const { results } = await this.get('discover/movie', {
            api_key: process.env.TMDB_API_KEY,
            with_genres: 99,
            page,
        })
        return Array.isArray(results)
            ? results.map((show) => showFormat(show))
            : []
    }
    async getMovieDetails(id: string) {
        const results: MovieDetails = await this.get(`movie/${id}`, {
            api_key: process.env.TMDB_API_KEY,
            language: 'en - US',
        })
        return results ? movieDetailsFormat(results) : {}
    }
    async getCast(id: string) {
        const results: CastDetails = await this.get(`movie/${id}/credits`, {
            api_key: process.env.TMDB_API_KEY,
            language: 'en - US',
        })

        return Array.isArray(results.cast)
            ? results.cast.map((actor) => actorFormat(actor))
            : []
    }
    async getTrailers(id: string) {
        const results: TrailersDetails = await this.get(`movie/${id}/videos`, {
            api_key: process.env.TMDB_API_KEY,
            language: 'en - US',
        })
        return Array.isArray(results.results)
            ? results.results.map((trailer) => trailerFormat(trailer))
            : []
    }
    async getAiringToday(page: number) {
        const { results } = await this.get(`tv/airing_today`, {
            api_key: process.env.TMDB_API_KEY,
            page,
        })
        return Array.isArray(results)
            ? results.map((show) => tvFormat(show))
            : []
    }
    async getOnAir(page: number) {
        const { results } = await this.get(`tv/on_the_air`, {
            api_key: process.env.TMDB_API_KEY,
            page,
        })
        return Array.isArray(results)
            ? results.map((show) => tvFormat(show))
            : []
    }
    async getTVPopular(page: number) {
        const { results } = await this.get(`tv/popular`, {
            api_key: process.env.TMDB_API_KEY,
            page,
        })
        return Array.isArray(results)
            ? results.map((show) => tvFormat(show))
            : []
    }
    async getTVTopRated(page: number) {
        const { results } = await this.get(`tv/top_rated`, {
            api_key: process.env.TMDB_API_KEY,
            page,
        })
        return Array.isArray(results)
            ? results.map((show) => tvFormat(show))
            : []
    }
    async getTVShowDetails(id: number) {
        const results = await this.get(`tv/${id}`, {
            api_key: process.env.TMDB_API_KEY,
        })
        return results ? tvFormat(results) : {}
    }
    async getTVCast(id: string) {
        const results: CastDetails = await this.get(`tv/${id}/credits`, {
            api_key: process.env.TMDB_API_KEY,
            language: 'en - US',
        })

        return Array.isArray(results.cast)
            ? results.cast.map((actor) => actorFormat(actor))
            : []
    }
    async getTVTrailers(id: string) {
        const results: TrailersDetails = await this.get(`tv/${id}/videos`, {
            api_key: process.env.TMDB_API_KEY,
            language: 'en - US',
        })
        return Array.isArray(results.results)
            ? results.results.map((trailer) => trailerFormat(trailer))
            : []
    }
}

export default TMDBAPI
