const {
  uploadAvatarCtr
} = require('../controller/UploadController');

// @ts-ignore
const Router = require('koa-router');
// @ts-ignore
const router = new Router();

router.post('/uploadAvatar', uploadAvatarCtr);

module.exports = router;
