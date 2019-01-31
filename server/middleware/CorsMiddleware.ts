module.exports = async (ctx: any, next: any) => {
  ctx.response.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
  });
  await next();
};
