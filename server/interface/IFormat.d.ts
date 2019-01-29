import { Document } from 'mongoose'

/**
 * 格式
 */
export default interface IFormat extends Document {
  name: string;           // 格式简称
  logo: string;           // 图标
  size: Array<number>;    // 大小 - [w, h]
  cTime: Date;            // 创建时间
  try: boolean;           // 试验功能
  status: boolean;        // 状态
}
