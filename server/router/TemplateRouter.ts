const {
  getTemplateByFormatCtr,
  getTemplateByIdCtr,
  saveTemplateCtr
} = require('../controller/TemplateController');

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/getTemplateByFormat', getTemplateByFormatCtr);
router.get('/getTemplateById', getTemplateByIdCtr);
router.put('/saveTemplate', saveTemplateCtr);

module.exports = router;
