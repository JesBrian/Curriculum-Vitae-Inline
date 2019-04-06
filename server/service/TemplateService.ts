import TemplateModel from '../model/TemplateModel'

exports.getTemplateByFormatSer = async (formatId: string = '') => {
  return await TemplateModel.find({formatId: formatId, status: true});
};

exports.getTemplateByIdSer = async (templateId: string = '') => {
  return await TemplateModel.findById(templateId);
};

exports.createTemplateSer = async (templateData: any = null) => {
  const template = new TemplateModel(templateData);
  // @ts-ignore
  return !await template.save().errors;
};

exports.updateTemplateSer = async (templateId: string = '', templateData: any = null) => {
  // @ts-ignore
  const template = await this.getTemplateByIdSer(templateId);
  Object.assign(template, templateData);
  return !await template.save().errors;
};
