export const getTVShowDetails = async (parent: any, { id }: any, ctx: any) => {
    const TVShowDetails = await ctx.dataSources.TMDBAPI.getTVShowDetails(id)

    return TVShowDetails
}
