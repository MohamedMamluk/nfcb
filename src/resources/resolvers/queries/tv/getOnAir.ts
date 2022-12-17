export const getOnAir = async (parent: any, { page }: any, ctx: any) => {
    const OnAir = await ctx.dataSources.TMDBAPI.getOnAir(page)

    return OnAir
}
