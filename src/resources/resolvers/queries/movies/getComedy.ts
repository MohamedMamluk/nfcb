export const getComedy = async (parent: any, { page }: any, ctx: any) => {
    const Comedy = await ctx.dataSources.TMDBAPI.getComedy(page)

    return Comedy
}
