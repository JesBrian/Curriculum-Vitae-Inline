const {
  createRoleSer,
  updateRoleSer,
  getRoleListSer,
  getRoleByIdSer
} = require('../service/AuthService');

/**
 * 创建/更新角色信息
 * @param ctx
 * @param next
 */
exports.saveRoleCtr = async (ctx: any, next: any) => {
  const param = ctx.request.body;
  const roleId = param.id;
  let roleData = {
    name: param.name,
    powers: param.powers,
    status: param.status
  };

  let result, status = 200, msg = '角色信息保存成功';
  if (roleId) {
    result = await updateRoleSer(roleId, roleData);
  } else {
    result = await createRoleSer(roleData);
  }

  if (!result) {
    status = 555;
    msg = '角色信息保存失败';
  }

  ctx.body = {
    status: status,
    msg: msg
  };
};

/**
 *
 * @param ctx
 * @param next
 */
exports.getRoleListCtr = async (ctx: any, next: any) => {
  const condition = ctx.query;

  const roleData = await getRoleListSer(condition);

  ctx.body = {
    status: 200,
    data: roleData
  };
};

exports.getRoleByIdCtr = async (ctx: any, next: any) => {
  const roleId = ctx.query.id;
  const result = await getRoleByIdSer(roleId);

  ctx.body = {
    status: 200,
    data: result
  };
};
