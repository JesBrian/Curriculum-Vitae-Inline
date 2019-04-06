const {
  getTemplateByFormatSer,
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
  const formatId = ctx.query.formatId;
  const templateListData = await getTemplateByFormatSer(formatId);

  ctx.body = {
    status: 200,
    data: templateListData
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
  const templateData = {};

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
