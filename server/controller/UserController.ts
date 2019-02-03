const { userLoginSer, userRegisterSer } = require('../service/UserService')

/**
 *
 * @param ctx
 * @param next
 */
exports.userRegisterCtr = async (ctx: any, next: any) => {
  const username = ctx.request.body.name;
  const mail = ctx.request.body.mail;
  const password = ctx.request.body.password;

  let result = '';
  if (await userRegisterSer(username, mail, password)) {
    result = '用户注册成功';
  } else {
    result = '用户注册失败';
  }

  ctx.body = {
    status: 200,
    msg: result
  };
};

/**
 *
 * @param ctx
 * @param next
 */
exports.userLoginCtr = async (ctx: any, next: any) => {
  const username = ctx.request.body.name;
  const password = ctx.request.body.password;

  const result = await userLoginSer(username, password);
  const status = 200;
  ctx.body = {
    status: status,
    msg: result
  }
};

exports.getUserListCtr = async (ctx: any, next: any) => {
};
