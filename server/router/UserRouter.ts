const {
  userRegisterCtr,
  userLoginCtr,
  allUserListCtr
} = require('../controller/UserController')

// @ts-ignore
const Router = require('koa-router');
// @ts-ignore
const router = new Router();

router.post('/userLogin', userLoginCtr);
router.put('/userRegister', userRegisterCtr);
router.get('/allUserList', allUserListCtr);

module.exports = router;
