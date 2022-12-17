interface TrendingType {
    original_name: string
    origin_country: string[]
    poster_path: Images
    id: number
    name: string
    vote_count: number
    first_air_date: string
    vote_average: number
    overview: string
    backdrop_path: Images
    original_language: string
    genre_ids: number[]
    popularity: number
    media_type: string
}
interface Images {
    w500: string
    original: string
}
interface ActorDetails {
    id: number
    name: string
    profile_path: Images
    character: string
}
interface CastDetails {
    id: number
    cast: ActorDetails[]
}
interface Trailer {
    name: string
    key: string
    site: string
    id: string
}
interface TrailersDetails {
    id: string
    results: Trailer[]
}
interface Genre {
    id: number
    name: string
}
interface ProductionCompany {
    id: number
    logo_path: Images
    name: string
    origin_country: string
}
interface MovieDetails {
    backdrop_path: Images
    budget: number
    genres: Genre[]
    id: number
    original_title: string
    production_companies: ProductionCompany[]
    release_date: string
    vote_average: number
    vote_count: number
    overview: string
    title: string
}
interface Show {
    adult: boolean
    backdrop_path: Images
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: Images
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
interface TVShow {
    backdrop_path: Images
    first_air_date: string
    genre_ids: Genre[]
    id: number
    name: string
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: Images
    vote_average: number
    vote_count: number
}
export {
    TrendingType,
    Show,
    ActorDetails,
    CastDetails,
    Trailer,
    TrailersDetails,
    MovieDetails,
    TVShow,
}
