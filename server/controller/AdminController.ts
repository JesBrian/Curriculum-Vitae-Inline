const {
  createAdminSer,
  updateAdminSer,
  getAdminByIdSer,
  adminListSer
} = require('../service/AdminService');

/**
 * 创建/更新管理员信息
 * @param ctx
 * @param next
 */
exports.saveAdminCtr = async (ctx: any, next: any) => {
  const param = ctx.request.body;
  const adminId = param.id;
  let adminData = {
    trueName: param.trueName,
    userId: param.userId,
    roleId: param.roleId,
    status: param.status
  };

  let result, status = 200, msg = '管理员信息保存成功';
  if (adminId) {
    result = await updateAdminSer(adminId, adminData);
  } else {
    result = await createAdminSer(adminData);
  }

  if (!result) {
    status = 555;
    msg = '管理员信息保存失败';
  }

  ctx.body = {
    status: status,
    msg: msg
  };
};

exports.getAdminByIdCtr = async (ctx: any, next: any) => {
  const adminId = ctx.query.id;
  const result = await getAdminByIdSer(adminId);
  ctx.body = {
    status: 200,
    data: result
  };
};

/**
 * 获取管理员列表
 * @param ctx
 * @param next
 */
exports.adminListCtr = async (ctx: any, next: any) => {
  const pageNum = ctx.query.page;
  const limitNum = ctx.query.limit;

  const result = await adminListSer(pageNum, limitNum);

  ctx.body = {
    status: 200,
    data: result
  };
};
