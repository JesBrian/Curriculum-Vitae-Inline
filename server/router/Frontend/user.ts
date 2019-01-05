
// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/userRegister', async (ctx: any, next: any) => {
  ctx.body += 'userRegister';
});

router.get('/userLogin', async (ctx: any, next: any) => {
  ctx.body += 'userLogin';
});

module.exports = router;
