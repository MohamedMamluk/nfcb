export const getDocumentary = async (parent: any, { page }: any, ctx: any) => {
    const Documentary = await ctx.dataSources.TMDBAPI.getDocumentaries(page)

    return Documentary
}
