import AdminModel from '../model/AdminModel'

const { md5, generateRandomString } = require('../helper/FunctionHelper');

exports.adminLoginSer = async (nickName: string = '', password: string = '') => {
  const admin = await AdminModel.findOne({'nickName': nickName, status: true}, '_id nickName roleId salt password');
  let msg = '', data = null;
  if (admin) {
    if (md5(admin.salt + password) === admin.password) {
      admin.lTime = new Date();
      admin.save();
      data = {
        id: admin._id,
        name: admin.nickName,
        roleId: admin.roleId,
      };
      msg = '管理员登录成功';
    } else {
      msg = '管理员密码错误';
    }
  } else {
    msg = '管理员不存在';
  }
  return {
    msg: msg,
    data: data
  }
};

exports.createAdminSer = async (adminData: any = null) => {
  adminData.salt = generateRandomString(4);
  adminData.password = md5(adminData.salt + adminData.password);
  let admin = new AdminModel(adminData);
  // @ts-ignore
  return !await admin.save().errors;
};

exports.updateAdminSer = async (adminId: string = '', adminData: any = null) => {
  let admin = await AdminModel.findById(adminId);
  admin = Object.assign(admin, adminData);
  if (adminData.password) {
    admin.password = md5(admin.salt + adminData.password);
  }
  // @ts-ignore
  return !await admin.save().errors;
};

exports.getAdminByIdSer = async (adminId: string = '') => {
  return await AdminModel.findById(adminId);
};

exports.adminListSer = async (page: number = 1, limit: number = 10) => {
  return {
    adminList: await AdminModel.find().skip((page - 1) * limit).limit(limit),
    total: await AdminModel.find().count()
  };
};
