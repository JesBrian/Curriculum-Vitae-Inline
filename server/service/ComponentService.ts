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
  const componentList = await ComponentModel.find(condition).skip((page - 1) * limit).limit(limit);
  const total = await ComponentModel.find(condition).count();
  return {
    componentList, total
  };
};


exports.systemComponentListSer = async () => {
  let data = {
    prevent: new Array(),
    base: new Array(),
    advance: new Array()
  };
  const systemComponent = await ComponentModel.find({category: {$ne: 'extend'}, status: true});
  systemComponent.forEach((component) => {
    switch (component.category) {
      case 'prevent':
        data.prevent.push(component);
        break;
      case 'base':
        data.base.push(component);
        break;
      case 'advance':
        data.advance.push(component);
        break;
    }
  });
  return data;
};

exports.selfComponentListSer = async () => {
};

exports.collectionComponentListSer = async () => {
};
