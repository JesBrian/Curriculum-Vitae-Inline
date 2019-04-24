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
