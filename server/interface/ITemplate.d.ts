import { Document } from 'mongoose'

export interface ITemplate extends Document {
  name: string;         // 模板名
  img: string;          // 模板缩略图
  formatId: string;    // 格式ID
  conf: Array<string>;  // 模板组成 [组件ID]
  cTime: Date;         // 模板创建时间
  pTime: Date;         // 模板发布时间
  status: boolean;      // 模板状态
}
