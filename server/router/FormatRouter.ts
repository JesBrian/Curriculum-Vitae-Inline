const {
  getFormatListCtr,
  allFormatListCtr,
  getFormatByIdCtr,
  saveFormatCtr
} = require('../controller/FormatController');

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/formatList', getFormatListCtr);
router.get('/allFormatList', allFormatListCtr);

router.get('/getFormatById', getFormatByIdCtr);
router.put('/saveFormat', saveFormatCtr);

module.exports = router;
