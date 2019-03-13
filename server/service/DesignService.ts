import DesignModel from '../model/DesignModel'

/**
 * 获取单个设计
 * @param designId
 */
exports.getDesignByIdSer = async (designId = '') => {
  return await DesignModel.findOne({_id: designId});
};

/**
 * 创建设计
 */
exports.createDesignSer = async () => {
};

/**
 * 更新设计
 */
exports.updateDesignSer = async () => {
};
