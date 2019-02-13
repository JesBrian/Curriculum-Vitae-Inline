import FormatModel from '../model/FormatModel'

exports.getFormatListSer = async (status: Boolean) => {
  let condition = Object.create({});
  if (status) {
    condition.status = status
  }
  return await FormatModel.find(condition);
};

exports.createFormatSer = async (formatData: any = null) => {
  let format = new FormatModel(formatData);
  const result = await format.save();
  if (result.errors) {
    return false;
  }
  return true;
};

exports.updateFormatSer = async () => {

};
