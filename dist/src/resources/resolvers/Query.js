"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const getPopular_1 = require("./queries/movies/getPopular");
const getTopRated_1 = require("./queries/movies/getTopRated");
const getAction_1 = require("./queries/movies/getAction");
const getRomance_1 = require("./queries/movies/getRomance");
const getComedy_1 = require("./queries/movies/getComedy");
const getHorror_1 = require("./queries/movies/getHorror");
const getDocumentary_1 = require("./queries/movies/getDocumentary");
const getCast_1 = require("./queries/movies/getCast");
const getTrailers_1 = require("./queries/movies/getTrailers");
const getMovieDetails_1 = require("./queries/movies/getMovieDetails");
const getAiringToday_1 = require("./queries/tv/getAiringToday");
const getOnAir_1 = require("./queries/tv/getOnAir");
const getTVPopular_1 = require("./queries/tv/getTVPopular");
const getTVShowDetails_1 = require("./queries/tv/getTVShowDetails");
const getTVCast_1 = require("./queries/tv/getTVCast");
const getTVTrailers_1 = require("./queries/tv/getTVTrailers");
const getTVTopRated_1 = require("./queries/tv/getTVTopRated");
exports.Query = {
    getPopular: getPopular_1.getPopular,
    getTopRated: getTopRated_1.getTopRated,
    getAction: getAction_1.getAction,
    getRomance: getRomance_1.getRomance,
    getComedy: getComedy_1.getComedy,
    getHorror: getHorror_1.getHorror,
    getDocumentary: getDocumentary_1.getDocumentary,
    getCast: getCast_1.getCast,
    getTrailers: getTrailers_1.getTrailers,
    getMovieDetails: getMovieDetails_1.getMovieDetails,
    getAiringToday: getAiringToday_1.getAiringToday,
    getOnAir: getOnAir_1.getOnAir,
    getTVPopular: getTVPopular_1.getTVPopular,
    getTVShowDetails: getTVShowDetails_1.getTVShowDetails,
    getTVCast: getTVCast_1.getTVCast,
    getTVTrailers: getTVTrailers_1.getTVTrailers,
    getTVTopRated: getTVTopRated_1.getTVTopRated,
};
