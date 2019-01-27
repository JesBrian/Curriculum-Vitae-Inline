import { Document } from 'mongoose'

export interface IUser extends Document {
  name: string;       // 用户名
  avatar: string;     // 头像
  phone: string;      // 手机
  mail: string;       // 邮箱
  cTime: Date;       // 账户创建时间
  lTime: Date;       // 账户最后登录时间
  status: boolean;    // 账户状态
}
