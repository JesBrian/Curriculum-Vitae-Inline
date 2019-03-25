import RoleModel from '../model/RoleModel'

exports.createRoleSer = async (roleData: Object = null) => {
  let role = new RoleModel(roleData);
  const result = await role.save();
  if (result.errors) {
    return false;
  }
  return true;
};

exports.updateRoleSer = async (id: string = '', data: object = null) => {
  const role = await RoleModel.findById(id);
  Object.assign(role, data);
  // @ts-ignore
  return !await role.save().errors;
};

exports.getRoleListSer = async (condition: Object = null) => {
  return await RoleModel.find(condition);
};

exports.getRoleByIdSer = async (id: string = '') => {
  return await RoleModel.findById(id);
};
