import UserModel from '../model/UserModel'

const { md5, generateRandomString } = require('../helper/FunctionHelper')

/**
 * 用户登录
 * @param username
 * @param password
 */
exports.userLoginSer = async (username = '', password = '') => {
  const user = await UserModel.findOne({'name': username}, '_id name avatar salt password status');
  let msg = '', data = null;
  if (user) {
    if (user.status && (md5(user.salt + password) === user.password)) {
      user.lTime = new Date();
      user.save();
      data = {
        id: user._id,
        name: user.name,
        avatar: user.avatar
      };
      msg = '用户登录成功';
    } else {
      msg = '用户密码错误';
    }
  } else {
    msg = '用户不存在';
  }
  return {
    msg: msg,
    data: data
  }
};

/**
 * 用户注册
 * @param username
 * @param mail
 * @param password
 */
exports.userRegisterSer = async (username = '', mail = '', password = '') => {
  const salt = generateRandomString(4);
  let user = new UserModel({
    name: username,
    mail: mail,
    salt: salt,
    password: md5(salt + password)
  });
  const result = await user.save();
  if (result.errors) {
    return false;
  }
  return user._id;
};

exports.allUserListSer = async (condition: object = null, page: number = 1, limit: number = 10) => {
  const userList = await UserModel.find(condition).skip((page - 1) * limit).limit(limit);
  const total = await UserModel.find(condition).count();
  return {
    userList, total
  }
};

exports.getUserByIdSer = async (id = '') => {
  return await UserModel.findById(id, 'name avatar mail cTime lTime status');
};

exports.updateUserSer = async (id: string = '', userInfo: any = null) => {
  const user = await UserModel.findOne({_id: id});
  user.name = userInfo.name;
  user.avatar = userInfo.avatar;
  user.mail = userInfo.mail;
  user.password = md5(user.salt + userInfo.password);
  await user.save();
};
