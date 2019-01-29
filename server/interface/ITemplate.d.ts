import { Document } from 'mongoose'
import IContent from './IContent'

/**
 * 模板
 */
export default interface ITemplate extends Document {
  name: string;             // 模板名
  logo: string;             // 模板图标
  formatId: string;         // 格式ID
  author: string;       // 组件作者
  tags: Array<string>;  // 组件标签
  content: Array<IContent>; // 模板组成
  cTime: Date;              // 创建时间
  pTime: Date;              // 发布时间
  status: boolean;          // 模板状态
}
