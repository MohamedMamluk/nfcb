export const getTVTopRated = async (parent: any, { page }: any, ctx: any) => {
    const TVTopRated = await ctx.dataSources.TMDBAPI.getTVTopRated(page)

    return TVTopRated
}
