import { ActorDetails } from '../types'

export const actorFormat = (actor: ActorDetails) => {
    return {
        id: actor.id,
        name: actor.name,
        charcter: actor.character,
        profile_path: {
            w500: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
            original: `https://image.tmdb.org/t/p/original${actor.profile_path}`,
        },
    }
}
