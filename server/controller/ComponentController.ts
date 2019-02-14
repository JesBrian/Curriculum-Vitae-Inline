const {
  getComponentConfSer,
  createComponentSer,
  updateComponentSer,
  allComponentListSer
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
 * 创建/更新组件信息
 * @param ctx
 * @param next
 */
exports.saveComponentCtr = async (ctx: any, next: any) => {
  const componentData = ctx.request.body;

  let result, status = 200, msg = '组件信息保存成功';

  if (componentData.id) {
    result = await updateComponentSer(componentData);
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
