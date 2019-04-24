import { Document } from 'mongoose'

/**
 * 组件使用
 */
export default interface IComponentLog extends Document {
  componentId: string;         // 组件ID
  userId: string;         // 用户ID
  time: Date;          // 使用时间
}
