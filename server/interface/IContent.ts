import { Document } from 'mongoose'

/**
 * 内容
 *  不单独保存数据库, 以 Array<Content> 的形式
 *  存在 Template & Resume & [...扩展功能表]
 *  的 content 字段当中
 */
export default interface IContent extends Document {
  componentId: string,
  componentConf: Array<any>
}
