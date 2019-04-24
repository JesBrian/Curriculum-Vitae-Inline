import { Document } from 'mongoose'

/**
 * 模板使用
 */
export default interface ITemplateLog extends Document {
  templateId: string;         // 模板ID
  userId: string;         // 用户ID
  time: Date;          // 使用时间
}
