const {
  getDesignByIdCtr,
  saveDesignCtr
} = require('../controller/DesignController');

// @ts-ignore
const Router = require('koa-router');
// @ts-ignore
const router = new Router();

router.get('/getDesignById', getDesignByIdCtr);
router.put('/saveDesign', saveDesignCtr);

module.exports = router;
