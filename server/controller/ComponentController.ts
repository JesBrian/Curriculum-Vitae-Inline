const {
  getComponentConfSer,
  createComponentSer,
  updateComponentSer
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
 * 创建新组件
 * @param ctx
 * @param next
 */
exports.createComponentCtr = async (ctx: any, next: any) => {
  ctx.body = {
    status: 200,
    msg: '创建组件成功'
  };
};

/**
 * 更新组件信息
 * @param ctx
 * @param next
 */
exports.saveComponentCtr = async (ctx: any, next: any) => {
  const operation = ctx.body.oper;
  const componentData = ctx.body.componentData;

  if (operation === 'up') {
    updateComponentSer(componentData);
  } else {
    createComponentSer(componentData);
  }

  ctx.body = {
    status: 200,
    msg: '组件信息更新成功'
  };
};

/**
 *
 * @param ctx
 * @param next
 */
exports.getComponentListCtr = async (ctx: any, next: any) => {
};
