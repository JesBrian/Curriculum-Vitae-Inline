import { Document } from 'mongoose'
import IContent from './IContent'

/**
 * 设计[简历/名片/海报/...]
 */
export default interface IDesign extends Document {
  name: string;             // 该设计的名称
  logo: string;             // 图标
  author: string;           // 设计者
  tags: Array<string>;      // 搜索标签
  size: Array<number>;      // 设计规格大小
  cell: Array<IContent>;    // 设计内容
  cTime: Date;              // 创建时间
  mTime: Date;              // 修改时间
  status: boolean;          // 状态
}
