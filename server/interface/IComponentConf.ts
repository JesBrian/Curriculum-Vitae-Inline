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
  name: string
}

interface IFormat {
  name: string,
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
  name: string,
  text: {
    val: string
  },
  number: {
    val: number
  },
  type: string,
  use: boolean,
  title: string,
  size: number,
  color: number,
  align: Array<string>,
  underline: boolean
}

interface IStyle {
  name: string,
  bgColor: string,
  opacity: number
}
