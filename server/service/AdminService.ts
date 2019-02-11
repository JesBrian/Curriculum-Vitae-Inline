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
};

exports.adminListSer = async (page: number = 1, limit: number = 15) => {
  return await AdminModel.find();
};
