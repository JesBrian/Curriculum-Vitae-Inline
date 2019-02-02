import FormatModel from '../model/FormatModel'

exports.getFormatListSer = async (isTry: Boolean = false) => {
  return await FormatModel.find({'try': isTry});
};
