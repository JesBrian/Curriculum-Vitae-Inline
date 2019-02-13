const {
  getFormatListCtr,
  allFormatListCtr,
  saveFormatCtr,
} = require('../controller/FormatController');

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/formatList', getFormatListCtr);
router.get('/allFormatList', allFormatListCtr);

router.put('/saveFormat', saveFormatCtr);

module.exports = router;
