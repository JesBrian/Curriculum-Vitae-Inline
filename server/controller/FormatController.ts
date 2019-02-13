const {
  getFormatListSer,
  createFormatSer,
  updateFormatSer
} = require('../service/FormatService');

/**
 * 获取格式列表数据 - 前台使用
 * @param ctx
 * @param next
 */
exports.getFormatListCtr = async (ctx: any, next: any) => {
  const data = await getFormatListSer(true);
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
  const data = await getFormatListSer();
  ctx.body = {
    status: 200,
    data: data
  };
};

/**
 * 添加/修改格式信息
 * @param ctx
 * @param next
 */
exports.saveFormatCtr = async (ctx: any, next: any) => {
  const param = ctx.request.body;
  const formatId = param.id;
  const formatData = {
    name: param.name,
    size: param.size,
    logo: param.logo,
    status: param.status
  };

  let result, status = 200, msg = '格式信息保存成功';
  if (formatId) {
    result = await updateFormatSer(formatId, formatData);
  } else {
    result = await createFormatSer(formatData);
  }

  if (!result) {
    status = 555;
    msg = '格式信息保存失败';
  }

  ctx.body = {
    status: status,
    msg: msg
  };
};
