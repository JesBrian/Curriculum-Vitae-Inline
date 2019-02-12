import ComponentConfModel from '../model/ComponentConfModel'
import ComponentModel from '../model/ComponentModel'

/**
 * 获取组件配置信息
 */
exports.getComponentConfSer = async () => {
  return await ComponentConfModel.findOne();
};

/**
 * 创建新组件
 * @param componentData
 */
exports.createComponentSer = async (componentData: object = null) => {
  let component = new ComponentModel(componentData);
  const result = await component.save();
  if (result.errors) {
    return false;
  }
  return true;
};

/**
 * 更新组件数据
 * @param componentId
 * @param componentData
 */
exports.updateComponentSer = async (componentId: string = '', componentData: object = null) => {
};

/**
 *
 * @param condition
 * @param page
 * @param limit
 */
exports.allComponentListSer = async (condition: object = null, page: number = 1, limit: number = 10) => {
  const data = await ComponentModel.find(condition).skip((page - 1) * limit).limit(limit);
  const totalNum = await ComponentModel.find(condition).count();
  return {
    componentList: data,
    totalNum
  };
};
