const {
  userLoginSer,
  userRegisterSer,
  allUserListSer
} = require('../service/UserService');

/**
 *
 * @param ctx
 * @param next
 */
exports.userRegisterCtr = async (ctx: any, next: any) => {
  const username = ctx.request.body.name;
  const mail = ctx.request.body.mail;
  const password = ctx.request.body.password;

  let msg = '', userId = await userRegisterSer(username, mail, password);
  if (userId) {
    msg = '用户注册成功';
  } else {
    msg = '用户注册失败';
  }

  ctx.body = {
    status: 200,
    data: userId,
    msg: msg
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
    ...result
  };
  await next();
};

exports.allUserListCtr = async (ctx: any, next: any) => {
  const param = ctx.query;
  const page = parseInt(param.page);
  const limit = parseInt(param.limit);
  const condition = {
  };
  const result = await allUserListSer(condition, page, limit);

  ctx.body = {
    status: 200,
    data: result
  };
};
