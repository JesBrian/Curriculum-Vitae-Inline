const {
  uploadAvatarSer,
  uploadFormatLogoSer,
  uploadComponentLogoSer,
  uploadComponentContentSer,
  uploadTemplateLogoSer,
  uploadDesignLogoSer
} = require('../service/UploadService');

exports.uploadImgCtr = async (ctx: any, next: any) => {
  const type = ctx.request.body.type; // 上传图片的类型
  const file = ctx.request.files.file; // 获取上传文件

  ctx.body = {
    status: 200,
    data: await eval(`upload${type}Ser(file)`)
  };
};
