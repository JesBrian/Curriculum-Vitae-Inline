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
 * @param page
 * @param limit
 */
exports.getDesignListByUserSer = async (userId: string = '', status: boolean = true, page: number = 1, limit: number = 10) => {
  const designList = await DesignModel.find({author: userId, status}).skip((page - 1) * limit).limit(limit).sort({'mTime': -1});
  const total = await DesignModel.find({author: userId, status}).count();
  return {
    designList, total
  };
};

/**
 * 创建设计
 * @param designData
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
 * @param designId
 * @param designData
 */
exports.updateDesignSer = async (designId: string = '', designData: object = null) => {
  const design = await DesignModel.findOne({_id: designId});
  Object.assign(design, designData);
  await design.save();
  return designId;
};
