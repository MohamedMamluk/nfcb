"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trailerFormat = void 0;
const trailerFormat = (trailer) => {
    return {
        id: trailer.id,
        name: trailer.name,
        key: trailer.key,
        site: trailer.site,
    };
};
exports.trailerFormat = trailerFormat;
