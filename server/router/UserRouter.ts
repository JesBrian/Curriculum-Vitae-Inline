const {
  userRegisterCtr,
  userLoginCtr,
  allUserListCtr,
  getUserByIdCtr,
  updateUserCtr
} = require('../controller/UserController')

// @ts-ignore
const Router = require('koa-router');
// @ts-ignore
const router = new Router();

router.post('/userLogin', userLoginCtr);
router.put('/userRegister', userRegisterCtr);
router.get('/allUserList', allUserListCtr);
router.get('/getUserById', getUserByIdCtr);
router.put('/updateUser', updateUserCtr);

module.exports = router;
