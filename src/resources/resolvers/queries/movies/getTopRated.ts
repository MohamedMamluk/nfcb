export const getTopRated = async (parent: any, args: any, ctx: any) => {
    const topRated = await ctx.dataSources.TMDBAPI.getTopRated()

    return topRated
}
