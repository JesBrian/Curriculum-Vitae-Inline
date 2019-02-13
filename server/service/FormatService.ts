import FormatModel from '../model/FormatModel'

exports.getFormatListSer = async (status: Boolean) => {
  let condition = Object.create({});
  if (status) {
    condition.status = status
  }
  return await FormatModel.find(condition);
};

exports.createFormatSer = async (formatData: any = null) => {
  formatData.size[0] = Number(formatData.size[0]);
  formatData.size[1] = Number(formatData.size[1]);
  let format = new FormatModel(formatData);
  const result = await format.save();
  if (result.errors) {
    return false;
  }
  return true;
};

exports.updateFormatSer = async () => {

};
