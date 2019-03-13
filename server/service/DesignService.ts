import DesignModel from '../model/DesignModel'

/**
 * 获取单个设计
 * @param designId
 */
exports.getDesignByIdSer = async (designId: string = '') => {
  return await DesignModel.findOne({_id: designId});
};

/**
 * 获取设计列表
 * @param userId
 * @param status
 */
exports.getDesignListByUserSer = async (userId: string = '', status: boolean = true) => {
  return await DesignModel.findOne({author: userId, status});
};

/**
 * 创建设计
 */
exports.createDesignSer = async (designData: object = null) => {
  let design = new DesignModel(designData);
  const result = await design.save();
  if (result.errors) {
    return false;
  }
  return design._id;
};

/**
 * 更新设计
 */
exports.updateDesignSer = async () => {
};
