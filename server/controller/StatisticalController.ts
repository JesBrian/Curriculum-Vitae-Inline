const {
  chooseFormatLogSer,
  chooseTemplateLogSer,
  chooseComponentLogSer,

  allUserCountSer,
  allFormatCountSer,
  allTemplateCountSer,
  allComponentCountSer,
  allDesignCountSer
} = require('../service/StatisticalService');

exports.chooseFormatLogCtr = async (ctx: any, next: any) => {
  const {userId, formatId} = ctx.request.body;
  chooseFormatLogSer(userId, formatId);
  ctx.body = {
    status: 200
  };
};

exports.chooseTemplateLogCtr = async (ctx: any, next: any) => {
  const {userId, templateId} = ctx.request.body;
  chooseTemplateLogSer(userId, templateId);
  ctx.body = {
    status: 200
  };
};

exports.chooseComponentLogCtr = async (ctx: any, next: any) => {
  const {userId, componentId} = ctx.request.body;
  chooseComponentLogSer(userId, componentId);
  ctx.body = {
    status: 200
  };
};

/**
 * 后台首页总统计
 * @param ctx
 * @param next
 */
exports.totalStatisticalCtr = async (ctx: any, next: any) => {
  // @ts-ignore
  const result = await Promise.all([allUserCountSer(), allFormatCountSer(), allTemplateCountSer(), allComponentCountSer(), allDesignCountSer()]);
  ctx.body = {
    status: 200,
    data: result
  }
};

exports.allUserCountCtr = async (ctx: any, next: any) => {
  const count = await allUserCountSer();
  ctx.body = {
    status: 200,
    data: count
  };
};
exports.allFormatCountCtr = async (ctx: any, next: any) => {
  const count = await allFormatCountSer();
  ctx.body = {
    status: 200,
    data: count
  };
};
exports.allTemplateCountCtr = async (ctx: any, next: any) => {
  const count = await allTemplateCountSer();
  ctx.body = {
    status: 200,
    data: count
  };
};
exports.allComponentCountCtr = async (ctx: any, next: any) => {
  const count = await allComponentCountSer();
  ctx.body = {
    status: 200,
    data: count
  };
};
exports.allDesignCountCtr = async (ctx: any, next: any) => {
  const count = await allDesignCountSer();
  ctx.body = {
    status: 200,
    data: count
  };
};
