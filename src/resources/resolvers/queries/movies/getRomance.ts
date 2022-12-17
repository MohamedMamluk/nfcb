export const getRomance = async (parent: any, { page }: any, ctx: any) => {
    const Romance = await ctx.dataSources.TMDBAPI.getRomance(page)

    return Romance
}
