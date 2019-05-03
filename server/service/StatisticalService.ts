import UserModel from '../model/UserModel';
import FormatModel from '../model/FormatModel';
import TemplateModel from '../model/TemplateModel';
import ComponentModel from '../model/ComponentModel';
import DesignModel from '../model/DesignModel';

import FormatLogModel from '../model/FormatLogModel';
import TemplateLogModel from '../model/TemplateLogModel';
import ComponentLogModel from '../model/ComponentLogModel';


exports.chooseFormatLogSer = async (userId: string = '', formatId: string = '') => {
  let formatLog = new FormatLogModel({
    userId, formatId
  });
  // @ts-ignore
  return !await formatLog.save().errors;
};

exports.chooseTemplateLogSer = async (userId: string = '', templateId: string = '') => {
  let templateLog = new TemplateLogModel({
    userId, templateId
  });
  // @ts-ignore
  return !await templateLog.save().errors;
};

exports.chooseComponentLogSer = async (userId: string = '', componentId: string = '') => {
  let componentLog = new ComponentLogModel({
    userId, componentId
  });
  // @ts-ignore
  return !await componentLog.save().errors;
};

exports.allUserCountSer = async () => {
  return await UserModel.count({status: true});
};

exports.allFormatCountSer = async () => {
  return await FormatModel.count({status: true});
};

exports.allTemplateCountSer = async () => {
  return await TemplateModel.count({status: true});
};

exports.allComponentCountSer = async () => {
  return await ComponentModel.count({status: true});
};

exports.allDesignCountSer = async () => {
  return await DesignModel.count(null);
};

/**
 * 获取格式报表数据
 * @param start
 * @param end
 */
exports.getFormatReportSer = async (start: Date, end: Date) => {
  const result = await Promise.all([
    FormatModel.find({status: true}, '_id name'),
    FormatLogModel.aggregate([
      {$match: {'time': {$gte: new Date(start), $lte: new Date(end)}}},
      {$group: {_id: '$formatId', count: {$sum: 1}}}
    ])
  ]);

  let formatData = result[0];
  let formatLogData = result[1];
  let tempFormatLogData: any = {};
  let tempFormatData: any[] = [];

  for (let i = formatLogData.length - 1; i >= 0; i--) {
    let item = formatLogData[i];
    tempFormatLogData[item._id] = item.count;
  }

  formatData.forEach((item) => {
    tempFormatData.push({
      name: item.name,
      value: tempFormatLogData.hasOwnProperty(item._id) ? tempFormatLogData[item._id]: 0
    });
  });
  tempFormatData.push({
    name: '自定义',
    value: tempFormatLogData.hasOwnProperty('custom') ? tempFormatLogData.custom : 0
  });
  return tempFormatData;
};

/**
 * 获取模板报表数据
 * @param start
 * @param end
 */
exports.getTemplateReportSer = async (start: Date, end: Date) => {
  const result = await Promise.all([
    TemplateModel.find({status: true}, '_id name'),
    TemplateLogModel.aggregate([
      {$match: {'time': {$gte: new Date(start), $lte: new Date(end)}}},
      {$group: {_id: '$templateId', count: {$sum: 1}}}
    ])
  ]);

  let templateData = result[0];
  let templateLogData = result[1];
  let tempTemplateLogData: any = {};
  let tempTemplateData: any[] = [];

  for (let i = templateLogData.length - 1; i >= 0; i--) {
    let item = templateLogData[i];
    tempTemplateLogData[item._id] = item.count;
  }

  templateData.forEach((item) => {
    tempTemplateData.push({
      name: item.name,
      value: tempTemplateLogData.hasOwnProperty(item._id) ? tempTemplateLogData[item._id]: 0
    });
  });
  tempTemplateData.push({
    name: '自定义',
    value: tempTemplateLogData.hasOwnProperty('custom') ? tempTemplateLogData.custom : 0
  });
  return tempTemplateData;
};
