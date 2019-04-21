const {
  allUserCountSer,
  allFormatCountSer,
  allTemplateCountSer,
  allComponentCountSer,
  allDesignCountSer
} = require('../service/StatisticalService');

exports.chooseFormatLogCtr = async (ctx: any, next: any) => {
};

exports.chooseTemplateLogCtr = async (ctx: any, next: any) => {
};

exports.chooseComponentLogCtr = async (ctx: any, next: any) => {
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
};
exports.allFormatCountCtr = async (ctx: any, next: any) => {
};
exports.allTemplateCountCtr = async (ctx: any, next: any) => {
};
exports.allComponentCountCtr = async (ctx: any, next: any) => {
};
exports.allDesignCountCtr = async (ctx: any, next: any) => {
};
