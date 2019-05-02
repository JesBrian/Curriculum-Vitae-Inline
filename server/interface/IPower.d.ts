import { Document } from 'mongoose'

/**
 * 后台权限
 */
export default interface IPower extends Document {
  name: string;         // 权限名
  route: string;        // 权限路由
  parent: string;       // 权限所属
  cTime: Date;          // 权限创建时间
  status: boolean;      // 权限状态
}
