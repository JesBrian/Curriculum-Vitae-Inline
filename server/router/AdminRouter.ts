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

router.post('/adminLogin', adminLoginCtr);
router.put('/saveAdmin', saveAdminCtr);
router.get('/getAdminById', getAdminByIdCtr);
router.get('/adminList', adminListCtr);

module.exports = router;
