import FormatModel from '../model/FormatModel'

/**
 * 获取格式列表
 * @param status
 */
exports.getFormatListSer = async (status: Boolean) => {
  let condition = Object.create({});
  if (status) {
    condition.status = status
  }
  return await FormatModel.find(condition);
};

/**
 * 根据ID获取单个格式信息
 * @param id
 */
exports.getFormatByIdSer = async (id: string = '') => {
  return await FormatModel.findById(id);
};

exports.createFormatSer = async (formatData: any = null) => {
  let format = new FormatModel(formatData);
  // @ts-ignore
  return !await format.save().errors;
};

exports.updateFormatSer = async (id: string = '', data: object = null) => {
  // @ts-ignore
  const format = await this.getFormatByIdSer(id);
  Object.assign(format, data);
  return !await format.save().errors;
};
