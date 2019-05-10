import TemplateModel from '../model/TemplateModel'

exports.getTemplateByFormatSer = async (formatId: string = '', page: number = 1, limit: number = 10) => {
  const condition = {
    formatId: formatId
  };

  const templateList = await TemplateModel.find(condition).skip((page - 1) * limit).limit(limit);
  const total = await TemplateModel.find(condition).count();

  return {
    templateList, total
  };
};

exports.getSystemTemplateByFormatSer = async (formatId: string = '') => {
  return await TemplateModel.find({formatId: formatId, status: true},'_id name logo');
};

exports.getTemplateByIdSer = async (templateId: string = '') => {
  return await TemplateModel.findById(templateId);
};

exports.createTemplateSer = async (templateData: any = null) => {
  const template = new TemplateModel(templateData);
  // @ts-ignore
  if (await template.save().errors) {
    return false;
  }
  return template.id;
};

exports.updateTemplateSer = async (templateId: string = '', templateData: any = null) => {
  // @ts-ignore
  const template = await this.getTemplateByIdSer(templateId);
  Object.assign(template, templateData);
  if (await template.save().errors) {
    return false;
  }
  return template.id;
};
