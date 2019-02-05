const { getComponentConfSer } = require('../service/ComponentService')

/**
 *
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
