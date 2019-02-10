import RoleModel from '../model/RoleModel'

exports.createRoleSer = async (roleData: Object = null) => {
  let role = new RoleModel(roleData);
  const result = await role.save();
  if (result.errors) {
    return false;
  }
  return true;
};

exports.updateRoleSer = async () => {
};

exports.getRoleListSer = async (condition: Object = null) => {
  return await RoleModel.find(condition);
};
