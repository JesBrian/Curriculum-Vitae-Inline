const {
  uploadAvatarSer
} = require('../service/UploadService');

exports.uploadAvatarCtr = async (ctx: any, next: any) => {
  await uploadAvatarSer();
};
