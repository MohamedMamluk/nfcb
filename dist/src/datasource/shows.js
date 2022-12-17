"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const showFormat_1 = require("../utils/TMDB FORMATS/showFormat");
const actorFormat_1 = require("../utils/TMDB FORMATS/actorFormat");
const trailerFormat_1 = require("../utils/TMDB FORMATS/trailerFormat");
const movieDetailsFormat_1 = require("../utils/TMDB FORMATS/movieDetailsFormat");
const tvShowFormat_1 = require("../utils/TMDB FORMATS/tv/tvShowFormat");
class TMDBAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.themoviedb.org/3/';
    }
    getPopular(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get('movie/popular', {
                api_key: process.env.TMDB_API_KEY,
                page: page || 1,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, showFormat_1.showFormat)(show))
                : [];
        });
    }
    getTopRated() {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get('movie/top_rated', {
                api_key: process.env.TMDB_API_KEY,
                language: 'en-US',
                page: 1,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, showFormat_1.showFormat)(show))
                : [];
        });
    }
    getAction(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get('discover/movie', {
                api_key: process.env.TMDB_API_KEY,
                with_genres: 28,
                page,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, showFormat_1.showFormat)(show))
                : [];
        });
    }
    getComedy(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get('discover/movie', {
                api_key: process.env.TMDB_API_KEY,
                with_genres: 35,
                page,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, showFormat_1.showFormat)(show))
                : [];
        });
    }
    getHorror(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get('discover/movie', {
                api_key: process.env.TMDB_API_KEY,
                with_genres: 27,
                page,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, showFormat_1.showFormat)(show))
                : [];
        });
    }
    getRomance(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get('discover/movie', {
                api_key: process.env.TMDB_API_KEY,
                with_genres: 10749,
                page,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, showFormat_1.showFormat)(show))
                : [];
        });
    }
    getDocumentaries(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get('discover/movie', {
                api_key: process.env.TMDB_API_KEY,
                with_genres: 99,
                page,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, showFormat_1.showFormat)(show))
                : [];
        });
    }
    getMovieDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.get(`movie/${id}`, {
                api_key: process.env.TMDB_API_KEY,
                language: 'en - US',
            });
            return results ? (0, movieDetailsFormat_1.movieDetailsFormat)(results) : {};
        });
    }
    getCast(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.get(`movie/${id}/credits`, {
                api_key: process.env.TMDB_API_KEY,
                language: 'en - US',
            });
            return Array.isArray(results.cast)
                ? results.cast.map((actor) => (0, actorFormat_1.actorFormat)(actor))
                : [];
        });
    }
    getTrailers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.get(`movie/${id}/videos`, {
                api_key: process.env.TMDB_API_KEY,
                language: 'en - US',
            });
            return Array.isArray(results.results)
                ? results.results.map((trailer) => (0, trailerFormat_1.trailerFormat)(trailer))
                : [];
        });
    }
    getAiringToday(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get(`tv/airing_today`, {
                api_key: process.env.TMDB_API_KEY,
                page,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, tvShowFormat_1.tvFormat)(show))
                : [];
        });
    }
    getOnAir(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get(`tv/on_the_air`, {
                api_key: process.env.TMDB_API_KEY,
                page,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, tvShowFormat_1.tvFormat)(show))
                : [];
        });
    }
    getTVPopular(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get(`tv/popular`, {
                api_key: process.env.TMDB_API_KEY,
                page,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, tvShowFormat_1.tvFormat)(show))
                : [];
        });
    }
    getTVTopRated(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const { results } = yield this.get(`tv/top_rated`, {
                api_key: process.env.TMDB_API_KEY,
                page,
            });
            return Array.isArray(results)
                ? results.map((show) => (0, tvShowFormat_1.tvFormat)(show))
                : [];
        });
    }
    getTVShowDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.get(`tv/${id}`, {
                api_key: process.env.TMDB_API_KEY,
            });
            return results ? (0, tvShowFormat_1.tvFormat)(results) : {};
        });
    }
    getTVCast(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.get(`tv/${id}/credits`, {
                api_key: process.env.TMDB_API_KEY,
                language: 'en - US',
            });
            return Array.isArray(results.cast)
                ? results.cast.map((actor) => (0, actorFormat_1.actorFormat)(actor))
                : [];
        });
    }
    getTVTrailers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.get(`tv/${id}/videos`, {
                api_key: process.env.TMDB_API_KEY,
                language: 'en - US',
            });
            return Array.isArray(results.results)
                ? results.results.map((trailer) => (0, trailerFormat_1.trailerFormat)(trailer))
                : [];
        });
    }
}
exports.default = TMDBAPI;
