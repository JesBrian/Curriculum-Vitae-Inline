import User from '../model/UserModel'

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

router.get('/userList', async (ctx: any, next: any) => {
  User.find((err, res) => {
    console.log(res[0]);
  });
});

module.exports = router;
