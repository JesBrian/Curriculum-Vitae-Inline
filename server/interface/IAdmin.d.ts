import { Document } from 'mongoose'

/**
 * 后台管理员
 */
export default interface IAdmin extends Document {
  userId: string;         // 对应用户ID
  nickName: string;        // 昵称
  trueName: string;       // 真实姓名
  roleId: string;         // 账户所属角色
  salt: string;           // 密码盐
  password: string;       // 账户密码
  cTime: Date;            // 账户创建时间
  lTime: Date;            // 账户最后登录时间
  status: boolean;        // 账户状态
}
