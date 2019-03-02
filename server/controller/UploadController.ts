const {
  uploadAvatarSer
} = require('../service/UploadService');

exports.uploadAvatarCtr = async (ctx: any, next: any) => {
  const file = ctx.request.files.file; // 获取上传文件

  await uploadAvatarSer(file);
};
