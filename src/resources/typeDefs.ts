import { gql } from 'apollo-server'
const typeDefs = gql`
    type Query {
        sayHi: String
        getUser(input: GetUserInput!): User!
        getPopular(page: String): [Show]
        getAiringToday(page: Int): [TVShow]
        getOnAir(page: Int): [TVShow]
        getTVTopRated(page: Int): [TVShow]
        getTVPopular(page: Int): [TVShow]
        getTVShowDetails(id: Int): TVShow
        getTopRated: [Show]
        getAction(page: Int): [Show]
        getComedy(page: Int): [Show]
        getHorror(page: Int): [Show]
        getRomance(page: Int): [Show]
        getDocumentary(page: Int): [Show]
        getCast(id: ID!): [Actor]
        getTVCast(id: ID!): [Actor]
        getTrailers(id: ID!): [Trailer]
        getTVTrailers(id: ID!): [Trailer]
        getMovieDetails(id: ID!): MovieDetails
    }
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        favorite: [String]!
        token: String!
    }

    type Actor {
        id: ID!
        name: String
        charcter: String
        profile_path: Images
    }
    type Genre {
        id: ID!
        name: String
    }
    type ProductionCompany {
        id: ID!
        logo_path: Images
        name: String
        origin_country: String
    }
    type MovieDetails {
        backdrop_path: Images
        budget: Int
        genres: [Genre]
        id: ID!
        original_title: String
        production_companies: [ProductionCompany]
        release_date: String
        vote_average: Float
        vote_count: Int
        overview: String
        title: String
    }
    type Trailer {
        name: String
        id: ID!
        site: String
        key: String
    }
    input GetUserInput {
        id: ID!
    }
    type Mutation {
        register(input: RegisterInput!): User!
        login(input: LoginInput!): User!
    }
    type Trending {
        original_name: String
        origin_country: [String]
        poster_path: String
        id: Int
        name: String
        vote_count: Int
        first_air_date: String
        vote_average: Float
        overview: String
        backdrop_path: String
        original_language: String
        genre_ids: [Int]
        popularity: Float
        media_type: String
    }
    type Show {
        adult: Boolean
        backdrop_path: Images
        genre_ids: [Int]
        id: Int
        original_language: String
        original_title: String
        overview: String
        popularity: Float
        poster_path: Images
        release_date: String
        title: String
        video: Boolean
        vote_average: Float
        vote_count: Int
    }
    type TVShow {
        backdrop_path: Images
        first_air_date: String
        genre_ids: [Int]
        id: Int
        name: String
        original_language: String
        original_name: String
        overview: String
        popularity: Float
        poster_path: Images
        vote_average: Float
        vote_count: Int
    }
    type Images {
        w500: String
        original: String
    }
    input RegisterInput {
        name: String!
        email: String!
        password: String!
    }
    input LoginInput {
        email: String!
        password: String!
    }
`
export default typeDefs
