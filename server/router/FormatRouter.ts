const { getFormatListCtr, allFormatListCtr, addFormatCtr, modifyFormatCtr } = require('../controller/FormatController')

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/formatList', getFormatListCtr);
router.get('/allFormatList', allFormatListCtr);

router.put('/addFormat', addFormatCtr);
router.put('/modifyFormatCtr', modifyFormatCtr);

module.exports = router;
