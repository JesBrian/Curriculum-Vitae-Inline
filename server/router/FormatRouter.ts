const { getFormatListCtr } = require('../controller/FormatController')

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/formatList', getFormatListCtr);

module.exports = router;
