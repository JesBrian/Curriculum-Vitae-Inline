const crypto = require('crypto');

/**
 * MD5加密
 * @param str
 */
const md5 = (str: string): string => {
  const crypto_md5 = crypto.createHash('md5');
  crypto_md5.update(str, 'utf8'); // 加入编码
  return crypto_md5.digest('hex');
};

/**
 * 生成范围内随机数
 * @param min
 * @param max
 */
const generateRandomNumber = (min: number = 0, max: number = 1): number => {
  return(min + Math.round(Math.random() * max - min));
};

/**
 * 生成随机字符串
 * @param length
 */
const generateRandomString = (length: number = 4): string => {
  let random13chars = function () {
    return Math.random().toString(16).substring(2, 15)
  };
  let loops = Math.ceil(length / 13);
  return new Array(loops).fill(random13chars).reduce((string, func) => {
    return string + func()
  }, '').substring(0, length)
};


module.exports = {
  md5,
  generateRandomNumber,
  generateRandomString
};