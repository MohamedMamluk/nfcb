export const getTVPopular = async (parent: any, { page }: any, ctx: any) => {
    const TVPopular = await ctx.dataSources.TMDBAPI.getTVPopular(page)

    return TVPopular
}
