const { userRegisterCtr, userLoginCtr, getUserListCtr } = require('../controller/UserController')

// @ts-ignore
const Router = require('koa-router');
// @ts-ignore
const router = new Router();

router.post('/userLogin', userLoginCtr);
router.put('/userRegister', userRegisterCtr);
router.get('/userList', getUserListCtr);

module.exports = router;
