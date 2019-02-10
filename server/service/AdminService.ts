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
