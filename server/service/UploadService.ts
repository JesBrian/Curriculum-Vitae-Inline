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
  const fileName = handleFileName() + file.name.substring(file.name.lastIndexOf('.'));
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  // 保存路径
  const filePath = `${path.join(__dirname, `../../upload/${savePath}/`)}${fileName}`;
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