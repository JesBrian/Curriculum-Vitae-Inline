const {
  adminLoginCtr,
  saveAdminCtr,
  getAdminByIdCtr,
  adminListCtr
} = require('../controller/AdminController');

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.put('/saveAdmin', saveAdminCtr);

router.post('/adminLogin', adminLoginCtr);

router.get('/getAdminById', getAdminByIdCtr);
router.get('/adminList', adminListCtr);

module.exports = router;
