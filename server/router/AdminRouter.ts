const {
  saveAdminCtr
} = require('../controller/AdminController')

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.put('/saveAdmin', saveAdminCtr);

router.get('/adminLogin', async (ctx: any, next: any) => {
});

module.exports = router;
