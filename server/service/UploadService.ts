// @ts-ignore
const fs = require('fs');

// @ts-ignore
const path = require('path');

// @ts-ignore
const { generateRandomString } = require('../helper/FunctionHelper');


/**
 * 处理上传文件名称
 */
const handleFileName = () => {
  return `${generateRandomString(4)}${Date.now()}`;
};

const handleSaveFile = (savePath: string = '', file: any) => {
  const dirName = path.join(__dirname, `../../upload/${savePath}/`);
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
  }
  const fileName = handleFileName() + file.name.substring(file.name.lastIndexOf('.'));
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  // 保存路径
  const filePath = `${dirName}${fileName}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return fileName;
};

/**
 * 上传头像
 * @param file
 */
exports.uploadAvatarSer = async (file: any) => {
  return handleSaveFile('avatar', file);
};

/**
 * 上传格式图标
 * @param file
 */
exports.uploadFormatLogoSer = async (file: any) => {
  return handleSaveFile('format', file);
};

/**
 * 上传组件图标
 * @param file
 */
exports.uploadComponentLogoSer = async (file: any) => {
  return handleSaveFile('component/logo', file);
};

/**
 * 上传设计封面
 * @param file
 */
exports.uploadDesignLogoSer = async (file: any) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const docName = `${date.getFullYear()}${month > 9 ? month : `0${month}`}`;
  return `${docName}/${handleSaveFile(`design/logo/${docName}`, file)}`;
};
