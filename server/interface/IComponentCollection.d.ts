import { Document } from 'mongoose'

/**
 * 组件收藏
 */
export default interface IComponentCollection extends Document {
  componentId: string;    // 组件ID
  userId: string;         // 用户ID
  time: Date;             // 收藏时间
}
