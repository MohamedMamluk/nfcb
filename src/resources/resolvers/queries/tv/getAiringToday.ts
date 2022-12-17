export const getAiringToday = async (parent: any, { page }: any, ctx: any) => {
    const airingToday = await ctx.dataSources.TMDBAPI.getAiringToday(page)

    return airingToday
}
