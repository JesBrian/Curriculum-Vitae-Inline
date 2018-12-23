
// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/f-index', async (ctx: { body: string; }, next: any) => {
  ctx.body += 'f-index8';
});

module.exports = router;
