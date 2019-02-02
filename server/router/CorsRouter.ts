// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.options('*', async (ctx: any) => {
  ctx.status = 200;
});

module.exports = router;
