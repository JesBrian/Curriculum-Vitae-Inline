import UserModel from '../model/UserModel'

const { md5, generateRandomString } = require('../helper/FunctionHelper')

/**
 * 用户登录
 * @param username
 * @param password
 */
exports.userLoginSer = async (username: string = '', password: string = '') => {
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
 * @param name
 * @param mail
 * @param password
 * @param status
 */
exports.userRegisterSer = async (name: string = '', mail: string = '', password: string = '', status: boolean = true) => {
  const salt = generateRandomString(4);
  let user = new UserModel({
    name: name,
    mail: mail,
    salt: salt,
    password: md5(salt + password),
    status: status
  });
  const result = await user.save();
  if (result.errors) {
    return false;
  }
  return user._id;
};

/**
 *
 * @param condition
 * @param page
 * @param limit
 */
exports.allUserListSer = async (condition: object = null, page: number = 1, limit: number = 10) => {
  const userList = await UserModel.find(condition).skip((page - 1) * limit).limit(limit);
  const total = await UserModel.find(condition).count();
  return {
    userList, total
  }
};

/**
 *
 * @param id
 */
exports.getUserByIdSer = async (id: string = '') => {
  return await UserModel.findById(id, 'name avatar mail cTime lTime status');
};

/**
 *
 * @param id
 * @param userInfo
 */
exports.updateUserSer = async (id: string = '', userInfo: any = null) => {
  let user = await UserModel.findOne({_id: id});
  user = Object.assign(user, userInfo);

  if (userInfo.password) {
    user.password = md5(user.salt + userInfo.password);
  }

  await user.save();
};
