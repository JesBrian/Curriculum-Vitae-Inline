const {
  createAdminSer,
  updateAdminSer
} = require('../service/AdminService');

exports.saveAdminCtr = async (ctx: any, next: any) => {
  const param = ctx.request.body;
  const adminId = param.id;
  let adminData = {
    name: param.name,
    powers: param.powers,
    status: param.status
  };

  let result, status = 200, msg = '角色信息保存成功';
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
