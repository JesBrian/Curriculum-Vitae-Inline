import { Document } from 'mongoose'

export interface IUser extends Document {
  name: string;       // 姓名
  avatar: string;     // 头像
  phone: string;      // 手机
  mail: string;       // 邮箱
  c_time: Date;       // 账户创建时间
  l_time: Date;       // 账户最后登录时间
  status: boolean;    // 账户状态
}

