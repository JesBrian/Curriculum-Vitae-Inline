
const Router = require('koa-router');

const router = new Router();

router.get('/f-index', async (ctx, next) => {
  ctx.body += 'f-index';
});

module.exports = router;
