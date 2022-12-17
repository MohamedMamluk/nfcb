export const getTVCast = async (parent: any, args: any, ctx: any) => {
    const Cast = await ctx.dataSources.TMDBAPI.getTVCast(args.id)

    return Cast
}
