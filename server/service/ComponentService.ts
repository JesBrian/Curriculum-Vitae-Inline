import ComponentModel from '../model/ComponentModel';
import ComponentConfModel from '../model/ComponentConfModel';
import ComponentCollectionModel from '../model/ComponentCollectionModel';

/**
 * 获取组件配置信息
 */
exports.getComponentConfSer = async () => {
  return await ComponentConfModel.findOne();
};

/**
 * 获取单个组件信息
 * @param id
 */
exports.getComponentByIdSer = async (id: string = '') => {
  return await ComponentModel.findById(id);
};

/**
 * 创建新组件
 * @param componentData
 */
exports.createComponentSer = async (componentData: object = null) => {
  let component = new ComponentModel(componentData);
  // @ts-ignore
  return !await component.save().errors;
};

/**
 * 更新组件数据
 * @param componentId
 * @param componentData
 */
exports.updateComponentSer = async (componentId: string = '', componentData: object = null) => {
  const component = await ComponentModel.findById(componentId);
  Object.assign(component, componentData);
  // @ts-ignore
  return !await component.save().errors;
};

/**
 * 获取组件列表 Ser
 * @param condition
 * @param page
 * @param limit
 * @param all
 */
exports.allComponentListSer = async (condition: object = null, page: number = 1, limit: number = 10, all: boolean = false) => {
  if (all) {
    return await ComponentModel.find(condition);
  }
  const componentList = await ComponentModel.find(condition).skip((page - 1) * limit).limit(limit);
  const total = await ComponentModel.find(condition).count();
  return {
    componentList, total
  };
};


exports.systemComponentListSer = async () => {
  let prevent: Array<any> = [], base: Array<any>  = [], advance: Array<any>  = [];
  const systemComponent = await ComponentModel.find({category: {$ne: 'extend'}, status: true});
  systemComponent.forEach((component) => {
    switch (component.category) {
      case 'prevent':
        prevent.push(component);
        break;
      case 'base':
        base.push(component);
        break;
      case 'advance':
        advance.push(component);
        break;
    }
  });
  return {
    prevent, base, advance
  };
};

/**
 * 获取收藏的组件列表
 * @param condition
 * @param page
 * @param limit
 * @param all
 */
exports.collectionListSer = async (condition: object = null, page: number = 1, limit: number = 10, all: boolean = false) => {
  let collectionList = [], total = 0;
  if (all) {
    collectionList = await ComponentCollectionModel.find(condition);
  } else {
    collectionList = await ComponentCollectionModel.find(condition).skip((page - 1) * limit).limit(limit);
    total = await ComponentCollectionModel.find(condition).count();
  }

  let componentList: any[] = [];

  for (let i = 0, len = collectionList.length; i < len; i++) {
    // @ts-ignore
    componentList.push(await this.getComponentByIdSer(collectionList[i].componentId));
  }

  if (all) {
    return componentList;
  }
  return {
    componentList, total
  };
};

/**
 * 获取已发布的用户组件列表 - 区分用户是否已经收藏
 * @param userId
 * @param page
 * @param limit
 */
exports.extendListSer = async (userId: string = '', page: number = 1, limit: number = 10) => {
  const condition = {
    $and: [
      {category: 'extend'},
      {status: true}
    ]
  };

  // @ts-ignore
  let result = JSON.parse(JSON.stringify(await this.allComponentListSer(condition, page, limit)));
  let componentList = result.componentList;

  for (let i = 0, len = componentList.length; i < len; i++) {
    const item = await ComponentCollectionModel.findOne({userId, componentId: componentList[i]._id});
    if (item) {
      componentList[i].cId = item._id;
    }
  }
  return result;
};

/**
 * 收藏/取消收藏操作
 * @param userId
 * @param componentId
 * @param cId
 */
exports.collectionComponentOptSer = async (userId: string = '', componentId: string = '', cId: string = '') => {
  if (cId) {
    return await ComponentCollectionModel.findByIdAndRemove(cId);
  }

  const componentCollection = new ComponentCollectionModel({
    userId: userId,
    componentId: componentId
  });

  const result = await componentCollection.save();
  if (result._id) {
    return result._id;
  }
  return false;
};
