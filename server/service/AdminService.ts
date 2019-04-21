import AdminModel from '../model/AdminModel'

exports.createAdminSer = async (adminData: object = null) => {
  let admin = new AdminModel(adminData);
  const result = await admin.save();
  if (result.errors) {
    return false;
  }
  return true;
};

exports.updateAdminSer = async (adminId: string = '', adminData: object = null) => {
  let admin = await AdminModel.findById(adminId);
  admin = Object.assign(admin, adminData);
  // @ts-ignore
  return !await admin.save().errors;
};

exports.getAdminByIdSer = async (adminId: string = '') => {
  return await AdminModel.findById(adminId);
};

exports.adminListSer = async (page: number = 1, limit: number = 15) => {
  return await AdminModel.find();
};
