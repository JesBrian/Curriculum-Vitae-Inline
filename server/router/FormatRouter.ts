
// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/getAllFormat', async (ctx: any, next: any) => {
  require('../model/FormatModule/FormatModule')
});

module.exports = router;
