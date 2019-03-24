
// @ts-ignore
const fs = require('fs');

// @ts-ignore
const path = require('path');

/**
 * 获取图片
 * @param ctx
 * @param next
 */
exports.getImgCtr = async (ctx: any) => {
  const file = path.join(__dirname, '../../upload') + ctx.request.url.substring(4);

  ctx.type = 'html';
  ctx.body = fs.createReadStream(file);
};
