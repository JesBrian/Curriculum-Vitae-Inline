// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

// 获取邮件验证码
router.get('/mailCode', async (ctx: any, next: any) => {
	ctx.body = {
		mail: ctx.query.mail,
		status: 200
	};
});

module.exports = router;
