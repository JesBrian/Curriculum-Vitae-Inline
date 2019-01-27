import { Document } from 'mongoose'

export interface IComponent extends Document {
  name: string;         // 组件名
  tags: Array<string>;  // 组件标签
  conf: Array<any>;     // 组件配置
  cTime: Date;          // 组件创建时间
  pTime: Date;          // 组件发布时间
  status: boolean;      // 组件状态
}
