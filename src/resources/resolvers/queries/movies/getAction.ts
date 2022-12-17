export const getAction = async (parent: any, { page }: any, ctx: any) => {
    const action = await ctx.dataSources.TMDBAPI.getAction(page)

    return action
}
