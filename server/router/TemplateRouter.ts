const {
  getTemplateByFormatCtr,
  saveTemplateCtr
} = require('../controller/TemplateController');

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.get('/getTemplateByFormat', getTemplateByFormatCtr);
router.put('/saveTemplate', saveTemplateCtr);

module.exports = router;
