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
  const designList = await DesignModel.find({author: userId, status}).skip((page - 1) * limit).limit(limit);
  const total = await DesignModel.find({author: userId, status}).count();
  return {
    designList, total
  };
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
