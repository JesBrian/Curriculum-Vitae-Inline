/**
 * CorsMiddleware - 跨域
 * @param ctx
 * @param next
 */
module.exports = async (ctx: any, next: any) => {
  ctx.response.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
  });
  await next();
};
