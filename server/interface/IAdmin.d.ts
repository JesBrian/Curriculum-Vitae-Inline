import { Document } from 'mongoose'

export interface IAdmin extends Document {
  userId: string;         // 对应用户ID
  trueName: string;       // 真实姓名
  cTime: Date;            // 账户创建时间
  lTime: Date;            // 账户最后登录时间
  status: boolean;        // 账户状态
}
