const fs = require('fs');

// @ts-ignore
const path = require('path');

exports.uploadAvatarSer = async (file: { path: any; name: any; }) => {
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  // 保存路径
  const filePath = path.join(__dirname, '../../upload/avatar') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
};
