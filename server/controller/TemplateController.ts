const {
  getTemplateByFormatSer,
  getSystemTemplateByFormatSer,
  getTemplateByIdSer,
  createTemplateSer,
  updateTemplateSer
} = require('../service/TemplateService');

/**
 * 根据格式分类ID获取模板简略信息
 * @param ctx
 * @param next
 */
exports.getTemplateByFormatCtr = async (ctx: any, next: any) => {
  const {
    formatId, page, limit
  } = ctx.query;

  const result = await getTemplateByFormatSer(formatId, parseInt(page), parseInt(limit));

  ctx.body = {
    status: 200,
    data: result
  };
};

/**
 *
 * @param ctx
 * @param next
 */
exports.getSystemTemplateByFormatCtr = async (ctx: any, next: any) => {
  const formatId = ctx.query.formatId;

  const result = await getSystemTemplateByFormatSer(formatId);

  ctx.body = {
    status: 200,
    data: result
  };
};

/**
 * 根据 ID 获取模板详细信息
 * @param ctx
 * @param next
 */
exports.getTemplateByIdCtr = async (ctx: any, next: any) => {
  const templateId = ctx.query.id;
  const templateData = await getTemplateByIdSer(templateId);

  ctx.body = {
    status: 200,
    data: templateData
  };
};

/**
 * 保存模板信息
 * @param ctx
 * @param next
 */
exports.saveTemplateCtr = async (ctx: any, next: any) => {
  const param = ctx.request.body;
  const templateId = param.id;
  const templateData = param.data;

  let result, status = 200, msg = '模板信息保存成功';
  if (templateId) {
    result = await updateTemplateSer(templateId, templateData);
  } else {
    result = await createTemplateSer(templateData);
  }

  if (!result) {
    status = 555;
    msg = '模板信息保存失败';
  }

  ctx.body = {
    status: status,
    msg: msg
  };
};
