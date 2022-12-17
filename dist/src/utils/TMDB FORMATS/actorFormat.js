"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorFormat = void 0;
const actorFormat = (actor) => {
    return {
        id: actor.id,
        name: actor.name,
        charcter: actor.character,
        profile_path: {
            w500: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
            original: `https://image.tmdb.org/t/p/original${actor.profile_path}`,
        },
    };
};
exports.actorFormat = actorFormat;
