/**
 * ResponseMiddleware
 * @param ctx
 * @param next
 */
module.exports = async (ctx: any, next: any) => {
  await next();
};
