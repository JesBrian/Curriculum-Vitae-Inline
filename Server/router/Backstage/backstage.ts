
// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/b-index', async (ctx: { body: string; }, next: any) => {
  ctx.body += 'b-index';
});

module.exports = router;
