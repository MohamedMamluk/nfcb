import { getPopular } from './queries/movies/getPopular'
import { getTopRated } from './queries/movies/getTopRated'
import { getAction } from './queries/movies/getAction'
import { getRomance } from './queries/movies/getRomance'
import { getComedy } from './queries/movies/getComedy'
import { getHorror } from './queries/movies/getHorror'
import { getDocumentary } from './queries/movies/getDocumentary'
import { getCast } from './queries/movies/getCast'
import { getTrailers } from './queries/movies/getTrailers'
import { getMovieDetails } from './queries/movies/getMovieDetails'
import { getAiringToday } from './queries/tv/getAiringToday'
import { getOnAir } from './queries/tv/getOnAir'
import { getTVPopular } from './queries/tv/getTVPopular'
import { getTVShowDetails } from './queries/tv/getTVShowDetails'
import { getTVCast } from './queries/tv/getTVCast'
import { getTVTrailers } from './queries/tv/getTVTrailers'
import { getTVTopRated } from './queries/tv/getTVTopRated'

export const Query = {
    getPopular,
    getTopRated,
    getAction,
    getRomance,
    getComedy,
    getHorror,
    getDocumentary,
    getCast,
    getTrailers,
    getMovieDetails,
    getAiringToday,
    getOnAir,
    getTVPopular,
    getTVShowDetails,
    getTVCast,
    getTVTrailers,
    getTVTopRated,
}
