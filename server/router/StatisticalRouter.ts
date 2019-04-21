const {
  chooseFormatLogCtr,
  chooseTemplateLogCtr,
  chooseComponentLogCtr,

  totalStatisticalCtr,

  allUserCountCtr,
  allFormatCountCtr,
  allTemplateCountCtr,
  allComponentCountCtr,
  allDesignCountCtr
} = require('../controller/StatisticalController');

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.put('/chooseFormatLog', chooseFormatLogCtr);
router.put('/chooseTemplateLog', chooseTemplateLogCtr);
router.put('/chooseComponentLog', chooseComponentLogCtr);

router.get('/totalStatistical', totalStatisticalCtr);

router.get('/allUserCount', allUserCountCtr);
router.get('/allFormatCount', allFormatCountCtr);
router.get('/allTemplateCount', allTemplateCountCtr);
router.get('/allComponentCount', allComponentCountCtr);
router.get('/allDesignCount', allDesignCountCtr);

module.exports = router;