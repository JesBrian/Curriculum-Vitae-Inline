const {
  getComponentConfSer,
  getComponentByIdSer,
  createComponentSer,
  updateComponentSer,
  allComponentListSer,
  systemComponentListSer,
  collectionListSer,
  extendListSer,
  collectionComponentOptSer
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
 * 获取除了用户上传的组件列表 Ctr
 * @param ctx
 * @param next
 */
exports.allSystemComponentListCtr = async (ctx: any, next: any) => {
  const {
    page, limit
  } = ctx.query;

  const condition = {
    'category': {
      $ne: 'extend'
    }
  };

  ctx.body = {
    status: 200,
    data: await allComponentListSer(condition, parseInt(page), parseInt(limit))
  }
};

/**
 * 获取用户上传的组件列表 Ctr
 * @param ctx
 * @param next
 */
exports.allExtendComponentListCtr = async (ctx: any, next: any) => {
  const {
    page, limit
  } = ctx.query;

  const condition = {
    category: 'extend'
  };

  ctx.body = {
    status: 200,
    data: await allComponentListSer(condition, parseInt(page), parseInt(limit))
  }
};


exports.systemComponentListCtr = async (ctx: any, next: any) => {
  ctx.body = {
    status: 200,
    data: await systemComponentListSer()
  }
};

exports.selfComponentListCtr = async (ctx: any, next: any) => {
  const {
    page, limit, userId, all
  } = ctx.query;

  const condition = {
    author: userId
  };

  ctx.body = {
    status: 200,
    data: await allComponentListSer(condition, parseInt(page), parseInt(limit), all === 'true')
  }
};

/**
 * 前台展示个人收藏组件列表
 * @param ctx
 * @param next
 */
exports.collectionComponentListCtr = async (ctx: any, next: any) => {
  const {
    page, limit, userId, all
  } = ctx.query;

  const condition = {
    userId: userId
  };

  ctx.body = {
    status: 200,
    data: await collectionListSer(condition, parseInt(page), parseInt(limit), all === 'true')
  }
};

/**
 * 前台展示网络组件列表
 * @param ctx
 * @param next
 */
exports.extendComponentListCtr = async (ctx: any, next: any) => {
  const {
    page, limit, userId
  } = ctx.query;

  ctx.body = {
    status: 200,
    data: await extendListSer(userId, parseInt(page), parseInt(limit))
  }
};

/**
 * 用户收藏/取消收藏组件
 * @param ctx
 * @param next
 */
exports.collectionComponentOptCtr = async (ctx: any, next: any) => {
  const {
    userId, componentId, cId
  } = ctx.request.body;

  let code = 200, msg = '收藏组件成功', result;
  result = await collectionComponentOptSer(userId, componentId, cId);
  if (!result) {
    code = 555;
    msg = '收藏组件失败';
  }

  ctx.body = {
    status: code,
    msg: `${(cId ? '取消' : '')}${msg}`
  };
  if (!cId && (code === 200)) {
    ctx.body.data = result;
  }
};
