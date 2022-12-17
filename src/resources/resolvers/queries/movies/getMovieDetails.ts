export const getMovieDetails = async (parent: any, args: any, ctx: any) => {
    const MovieDetails = await ctx.dataSources.TMDBAPI.getMovieDetails(args.id)

    return MovieDetails
}
