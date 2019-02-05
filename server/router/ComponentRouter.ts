const { getComponentConfCtr } = require('../controller/ComponentController')

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/componentConf', getComponentConfCtr);

module.exports = router;
