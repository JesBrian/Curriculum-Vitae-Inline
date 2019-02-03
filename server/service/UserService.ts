import UserModel from '../model/UserModel'

const crypto = require('crypto');
const md5 = (str: string) => {
  const crypto_md5 = crypto.createHash('md5');
  crypto_md5.update(str, 'utf8'); // 加入编码
  return crypto_md5.digest('hex');
};
const getRandomNum = (Min: number = 0, Max: number = 1): number => {
  return(Min + Math.round(Math.random() * Max - Min));
};
const generateMixed = (n: number = 4): string => {
  const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let res = "";
  for(let i = 0; i < n ; i ++) {
    let id = Math.ceil(Math.random()*35);
    res += chars[id];
  }
  return res;
};


/**
 * 用户登录
 * @param username
 * @param password
 */
exports.userLoginSer = async (username = '', password = '') => {
  const user = await UserModel.findOne({'name': username}, 'name avatar salt password status');
  if (user) {
    if (user.status && (md5(user.salt + password) === user.password)) {
      user.lTime = new Date();
      user.save();
      return '用户登录成功';
    }
    return '用户密码错误';
  }
  return '用户不存在';
};

/**
 * 用户注册
 * @param username
 * @param mail
 * @param password
 */
exports.userRegisterSer = async (username = '', mail = '', password = '') => {
  const salt = generateMixed(4);
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
  return true;
};

exports.allUserListSer = async (page = 1, limit = 15) => {
  return await UserModel.find();
};
