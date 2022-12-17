export const getHorror = async (parent: any, { page }: any, ctx: any) => {
    const Horror = await ctx.dataSources.TMDBAPI.getHorror(page)

    return Horror
}
