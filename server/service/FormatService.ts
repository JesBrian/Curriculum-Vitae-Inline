import FormatModel from '../model/FormatModel'

exports.getFormatListSer = async (status: Boolean) => {
  let condition = Object.create({});
  if (status) {
    condition.status = status
  }
  return await FormatModel.find(condition);
};
