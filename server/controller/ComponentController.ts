const {
  getComponentConfSer,
  getComponentByIdSer,
  createComponentSer,
  updateComponentSer,
  allComponentListSer,
  systemComponentListSer,
  selfComponentListSer,
  collectionComponentListSer,
  extendComponentListSer
} = require('../service/ComponentService');

/**
 * 获取组件基础配置
 * @param ctx
 * @param next
 */
exports.getComponentConfCtr = async (ctx: any, next: any) => {
  const confData = await getComponentConfSer();
  ctx.body = {
    status: 200,
    data: confData
  }
};

/**
 * 根据ID获取组件信息
 * @param ctx
 * @param next
 */
exports.getComponentByIdCtr = async (ctx: any, next: any) => {
  const componentId = ctx.query.id;
  const result = await getComponentByIdSer(componentId);
  ctx.body = {
    status: 200,
    data: result
  };
};

/**
 * 创建/更新组件信息
 * @param ctx
 * @param next
 */
exports.saveComponentCtr = async (ctx: any, next: any) => {
  const componentData = ctx.request.body;

  let result, status = 200, msg = '组件信息保存成功';

  if (componentData.id) {
    result = await updateComponentSer(componentData.id, componentData);
  } else {
    result = await createComponentSer(componentData);
  }

  if (!result) {
    status = 555;
    msg = '组件信息保存失败';
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
exports.allSystemComponentListCtr = async (ctx: any, next: any) => {
  const param = ctx.query;
  const page = parseInt(param.page);
  const limit = parseInt(param.limit);
  const condition = {
    'category': {
      $ne: 'extend'
    }
  };
  const result = await allComponentListSer(condition, page, limit);

  ctx.body = {
    status: 200,
    data: result
  }
};

/**
 *
 * @param ctx
 * @param next
 */
exports.allExtendComponentListCtr = async (ctx: any, next: any) => {
  const param = ctx.query;
  const page = parseInt(param.page);
  const limit = parseInt(param.limit);
  const condition = {
    category: 'extend'
  };
  const result = await allComponentListSer(condition, page, limit);

  ctx.body = {
    status: 200,
    data: result
  }
};


exports.systemComponentListCtr = async (ctx: any, next: any) => {
  const result = await systemComponentListSer();
  ctx.body = {
    status: 200,
    data: result
  }
};

exports.selfComponentListCtr = async (ctx: any, next: any) => {
  const result = await selfComponentListSer();
  ctx.body = {
    status: 200,
    data: result
  }
};

exports.collectionComponentListCtr = async (ctx: any, next: any) => {
  const result = await collectionComponentListSer();
  ctx.body = {
    status: 200,
    data: result
  }
};

exports.extendComponentListCtr = async (ctx: any, next: any) => {
  const result = await extendComponentListSer();
  ctx.body = {
    status: 200,
    data: result
  }
};
