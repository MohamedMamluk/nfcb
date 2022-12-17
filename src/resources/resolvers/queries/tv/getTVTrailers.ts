export const getTVTrailers = async (parent: any, args: any, ctx: any) => {
    const Trailers = await ctx.dataSources.TMDBAPI.getTVTrailers(args.id)

    return Trailers
}
