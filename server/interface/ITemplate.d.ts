import { Document } from 'mongoose'
import IContent from './IContent'

/**
 * 模板
 */
export default interface ITemplate extends Document {
  name: string;             // 模板名
  logo: string;             // 模板图标
  formatId: string;         // 格式ID
  author: string;           // 组件作者
  tags: Array<string>;      // 组件标签
  bg: string;               // 模板背景
  cell: Array<IContent>;    // 模板组成
  system: boolean;          // 是否系统预设置
  status: boolean;          // 模板状态
}
