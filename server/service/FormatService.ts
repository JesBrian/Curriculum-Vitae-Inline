import FormatModel from '../model/FormatModel'

exports.getFormatListSer = async () => {
  return await FormatModel.find();
};
