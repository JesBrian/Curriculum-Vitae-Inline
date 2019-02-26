const {
  uploadAvatarSer
} = require('');

exports.uploadAvatarCtr = async (ctx: any, next: any) => {
  await uploadAvatarSer();
};
