const { userLoginSer } = require('../service/UserService')

/**
 *
 * @param ctx
 * @param next
 */
exports.userRegisterCtr = async (ctx: any, next: any) => {
  console.log(ctx);
};

/**
 *
 * @param ctx
 * @param next
 */
exports.userLoginCtr = (ctx: any, next: any) => {
  userLoginSer();
};

exports.getUserListCtr = async (ctx: any, next: any) => {
};
