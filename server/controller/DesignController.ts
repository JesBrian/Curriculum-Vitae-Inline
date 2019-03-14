const {
  getDesignByIdSer,
  getDesignListByUserSer,
  createDesignSer,
  updateDesignSer
} = require('../service/DesignService');

/**
 * 根据 ID 获取单个设计
 * @param ctx
 * @param next
 */
exports.getDesignByIdCtr = async (ctx: any, next: any) => {
  const id = ctx.query.id;
  const result = await getDesignByIdSer(id);

  ctx.body = {
    status: 200,
    data: result
  }
};

/**
 * 根据 用户ID 获取设计列表
 * @param ctx
 * @param next
 */
exports.getDesignListByUserCtr = async (ctx: any, next: any) => {
  const { userId, status, page, limit } = ctx.query;
  const condition = {
  };
  const result = await getDesignListByUserSer(userId, status, page, limit);

  ctx.body = {
    status: 200,
    data: result
  }
};

/**
 * 保存设计信息
 * @param ctx
 * @param next
 */
exports.saveDesignCtr = async (ctx: any, next: any) => {
  const param = ctx.request.body;
  const designId = param.id;

  let result;
  if (designId) {
    result = await updateDesignSer(param);
  } else {
    result = await createDesignSer(param);
  }

  ctx.body = {
    status: 200,
    msg: '保存成功',
    data: result
  }
};
