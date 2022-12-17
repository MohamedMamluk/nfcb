export const getTrailers = async (parent: any, args: any, ctx: any) => {
    const Trailers = await ctx.dataSources.TMDBAPI.getTrailers(args.id)

    return Trailers
}
