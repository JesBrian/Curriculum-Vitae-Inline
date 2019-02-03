const { getFormatListSer } = require('../service/FormatService')

/**
 * 获取格式列表数据 - 前台使用
 * @param ctx
 * @param next
 */
exports.getFormatListCtr = async (ctx: any, next: any) => {
  const isTry = ctx.query.try;
  const data = await getFormatListSer(isTry);
  ctx.body = {
    status: 200,
    data: data
  };
};

/**
 * 获取所有格式列表 - 后台管理使用
 * @param ctx
 * @param next
 */
exports.allFormatListCtr = async (ctx: any, next: any) => {
};

/**
 * 添加格式
 * @param ctx
 * @param next
 */
exports.addFormatCtr = async (ctx: any, next: any) => {
};

/**
 * 修改格式
 * @param ctx
 * @param next
 */
exports.modifyFormatCtr = async (ctx: any, next: any) => {
};
