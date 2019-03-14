import { Document } from 'mongoose'

/**
 * 收藏 - [组件]
 */
export default interface ICollection extends Document {
  userId: string,       // 用户ID
  componentId: string,  // 组件ID
  time: Date            // 收藏时间
}
