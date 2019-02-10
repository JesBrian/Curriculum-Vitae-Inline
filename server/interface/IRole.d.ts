import { Document } from 'mongoose'

/**
 * 后台管理员所属角色
 */
export default interface IRole extends Document {
  name: string;         // 角色昵称
  powers: Array<any>;   // 角色所拥有权限
  cTime: Date;          // 角色创建时间
  status: boolean;      // 角色状态
}
