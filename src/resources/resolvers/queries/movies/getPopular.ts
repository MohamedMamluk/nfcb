export const getPopular = async (parent: any, { page }: any, ctx: any) => {
    const popular = await ctx.dataSources.TMDBAPI.getPopular(page)

    return popular
}
