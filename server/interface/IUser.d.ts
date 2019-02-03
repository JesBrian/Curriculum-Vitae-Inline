import { Document } from 'mongoose'

/**
 * 用户
 */
export default interface IUser extends Document {
  name: string;       // 用户名
  avatar: string;     // 头像
  mail: string;       // 邮箱
  salt: string;       // 密码盐
  password: string;   // 账户密码
  cTime: Date;        // 账户创建时间
  lTime: Date;        // 账户最后登录时间
  status: boolean;    // 账户状态
}
