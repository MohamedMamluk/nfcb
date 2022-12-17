export const getCast = async (parent: any, args: any, ctx: any) => {
    const Cast = await ctx.dataSources.TMDBAPI.getCast(args.id)

    return Cast
}
