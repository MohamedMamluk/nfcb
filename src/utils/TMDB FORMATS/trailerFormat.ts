import { Trailer } from '../types'

export const trailerFormat = (trailer: Trailer) => {
    return {
        id: trailer.id,
        name: trailer.name,
        key: trailer.key,
        site: trailer.site,
    }
}
