import ComponentConfModel from '../model/ComponentConfModel'

/**
 *
 */
exports.getComponentConfSer = async () => {
  return await ComponentConfModel.findOne();
};

exports.createComponentSer = async () => {
};

exports.updateComponentSer = async () => {
};
