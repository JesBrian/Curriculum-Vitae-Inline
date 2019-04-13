const {
  getDesignByIdCtr,
  getDesignListByUserCtr,
  saveDesignCtr,
  switchDesignStatusCtr
} = require('../controller/DesignController');

// @ts-ignore
const Router = require('koa-router');
// @ts-ignore
const router = new Router();

router.get('/getDesignById', getDesignByIdCtr);
router.get('/getDesignListByUser', getDesignListByUserCtr);
router.put('/saveDesign', saveDesignCtr);
router.put('/switchDesignStatus', switchDesignStatusCtr);

module.exports = router;
