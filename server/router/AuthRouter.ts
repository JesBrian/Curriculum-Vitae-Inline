const {
  saveRoleCtr,
  getRoleListCtr,
  getRoleByIdCtr
} = require('../controller/AuthController');

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

router.put('/saveRole', saveRoleCtr);
router.get('/getRoleList', getRoleListCtr);
router.get('/getRoleById', getRoleByIdCtr);

module.exports = router;
