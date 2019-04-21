import UserModel from '../model/UserModel';
import FormatModel from '../model/FormatModel';
import TemplateModel from '../model/TemplateModel';
import ComponentModel from '../model/ComponentModel';
import DesignModel from '../model/DesignModel';

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
