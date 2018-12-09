
const Router = require('koa-router');

const router = new Router();

router.get('/b-index', async (ctx, next) => {
  ctx.body += 'b-index';
});

module.exports = router;
