const {
  chooseFormatLogCtr,
  chooseTemplateLogCtr,
  chooseComponentLogCtr
} = require('../controller/StatisticalController');

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.put('/chooseFormatLog', chooseFormatLogCtr);
router.put('/chooseTemplateLog', chooseTemplateLogCtr);
router.put('/chooseComponentLog', chooseComponentLogCtr);

module.exports = router;
