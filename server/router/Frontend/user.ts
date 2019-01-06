
// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.put('/userRegister', async (ctx: any, next: any) => {
  ctx.body = {
    msg: 'userRegister'
  };
});

router.get('/userLogin', async (ctx: any, next: any) => {
  ctx.body += 'userLogin';
});

module.exports = router;
