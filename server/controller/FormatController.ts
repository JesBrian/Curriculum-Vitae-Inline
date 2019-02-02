const { getFormatListSer } = require('../service/FormatService')

exports.getFormatListCtr = async (ctx: any, next: any) => {
  const isTry = ctx.query.try;
  const data = await getFormatListSer(isTry);
  ctx.body = {
    status: 200,
    data: data
  };
};
