const {
  uploadImgCtr
} = require('../controller/UploadController');

// @ts-ignore
const Router = require('koa-router');
// @ts-ignore
const router = new Router();

router.post('/uploadImg', uploadImgCtr);

module.exports = router;
