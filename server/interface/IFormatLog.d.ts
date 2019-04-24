import { Document } from 'mongoose'

/**
 * 格式使用
 */
export default interface IFormatLog extends Document {
  formatId: string;         // 格式ID
  userId: string;         // 用户ID
  time: Date;          // 使用时间
}
