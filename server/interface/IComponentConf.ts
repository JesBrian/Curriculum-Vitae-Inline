import {Document} from 'mongoose'

/**
 * 组件配置
 */
export default interface IComponentConf extends Document {
  special: ISpecial,
  format: IFormat,
  input: IInput,
  style: IStyle
}

interface ISpecial {
}

interface IFormat {
  position: {
    axis: Array<number>,
    drag: boolean
  },
  size: {
    size: Array<number>,
    drag: boolean
  }
}

interface IInput {
  text: {
    val: string
  },
  number: {
    val: number
  },
  type: string,
  use: boolean,
  size: number,
  color: number,
  align: Array<string>,
  underline: boolean
}

interface IStyle {
  bgColor: string,
  opacity: number
}
